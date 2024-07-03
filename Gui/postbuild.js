const fs = require('fs');
console.log('Start postbuild script');

const CONST_FILE_LAYOUT = '../Remote/Views/Shared/Angular.cshtml';
const CONST_FILE_ROOTHTML = '../Remote/wwwroot/{lang}/index.html';

const REGEX_FILES = /(src|href)="((?!http)[^/@][^"]*)"/gmi;
const REGEX_BASE = /<base[^>]*>/gmi;
const REGEX_TITLE = /<title>[^<]*<\/title>/gmi;

const CSHTML_HEADER = '@using dvelop.Remote\r\n@using Microsoft.Extensions.Configuration\r\n@inject IConfiguration Configuration\r\n@using dvelop.Remote.Controller.Root\r\n';
const CSHTML_IF_START = '@using dvelop.Business.TranslationService\r\n@inject ILanguageProvider LanguageProvider\r\n@if (LanguageProvider.Language.TwoLetterISOLanguageName.Equals("{lang}", StringComparison.InvariantCultureIgnoreCase)) {\r\n';
const CSHTML_IF_MIDDLE = '\r\n} else if (LanguageProvider.Language.TwoLetterISOLanguageName.Equals("{lang}", StringComparison.InvariantCultureIgnoreCase)) {\r\n';
const CSHTML_IF_MIDDLE_LAST = '\r\n} else {\r\n';
const CSHTML_IF_END = '\r\n}\r\n';
const CSHTML_ASSETURI = '@{if(Configuration.AppRemoteAssetUri() != ""){@Configuration.AppRemoteAssetUri()@Html.Raw("/")}}';
const CSHTML_APPNAME = '@Configuration.AppName()';
const CSHTML_BASE = '<base href="/@Configuration.AppName()/">';
const CSHTML_TITLE = '<title>@RootController.APP_NAME</title>';

let languages = [];
let arg = process.argv[2];
if (!arg) {
  console.log('Missing parameter. Add --lang=<lang> as parameter');
  process.exit(1);
}
if (arg.substr(0, 7) === '--lang=') {
  languages = arg.substr(7).split(',');
} else {
  console.log('Unknown parameter "'+arg+'"');
  process.exit(1);
}

let angular_cshtml = CSHTML_HEADER;
if (languages.length === 1) {
  angular_cshtml += getHtmlForLang(languages[0])
} else {
  for (let i = 0; i < languages.length; i++) {
    if (i === 0) {
      angular_cshtml += CSHTML_IF_START.replace('{lang}', languages[i].split('-')[0]);
    } else if (i === languages.length - 1) {
      angular_cshtml += CSHTML_IF_MIDDLE_LAST;
    } else {
      angular_cshtml += CSHTML_IF_MIDDLE.replace('{lang}', languages[i].split('-')[0]);
    }
    angular_cshtml += getHtmlForLang(languages[i]);
  }

  angular_cshtml += CSHTML_IF_END;
}

console.log('Write Angular.cshtml file');
fs.writeFileSync(CONST_FILE_LAYOUT,
  angular_cshtml,
  (err) => {
    console.log('Error: File "' + CONST_FILE_LAYOUT + '" couldn\'t be writen ');
    process.exit(1);
  });

console.log('Finished postbuild script');


function getHtmlForLang(lang) {
  console.log('Get Html for '+lang+'...');
  let rootFile = CONST_FILE_ROOTHTML.replace('{lang}', lang);
  if (!fs.existsSync(rootFile)) {
    console.log('Error: File "' + rootFile + '" not found!');
    process.exit(1);
  }

  console.log('Read root.html file');
  let layoutFile = fs.readFileSync(rootFile, 'utf8');

  console.log('Replace paths');
  layoutFile = layoutFile.replace(REGEX_FILES, (match, p1, p2) => {
    return p1 + '="' + CSHTML_ASSETURI + lang + '/' + p2 + '"'
  });

  console.log('Replace asset uri placeholder');
  layoutFile = layoutFile.replace(/{%ASSETURI%}/g, CSHTML_ASSETURI + lang);
  layoutFile = layoutFile.replace(/{%APPNAME%}/g, CSHTML_APPNAME);

  console.log('Replace base tag');
  layoutFile = layoutFile.replace(REGEX_BASE, CSHTML_BASE);

  console.log('Replace title tag');
  layoutFile = layoutFile.replace(REGEX_TITLE, CSHTML_TITLE);

  return layoutFile;
}
