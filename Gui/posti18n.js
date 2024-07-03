var fs = require('fs');

const REG_EXP_UNIT = /<trans-unit[\d\D]*?<\/trans-unit>/g;
const REG_EXP_UNIT_ID = /id=".*?"/g;
const REG_EXP_SOURCE = /<source[\d\D]*?<\/source>/g;
const REG_EXP_TARGET = /<target[\d\D]*?<\/target>/g;
const INSERT_TARGET = '<target></target>';

let file = process.argv[2];
console.log('Start posti18n.js script on file ' + file);

fs.readFile(file, 'utf8', function (err,data) {
  if (err) throw err;

  let transUnits = data.match(REG_EXP_UNIT);

  transUnits.forEach(unit => {

    let id = unit.match(REG_EXP_UNIT_ID);
    console.log('Checking <transunit> element with ' + id);

    let source = unit.match(REG_EXP_SOURCE);
    let target = unit.match(REG_EXP_TARGET);
    let modifiedUnit = unit;

    if(source && !target) {
      console.log('\tFound source: ' + source[0]);
      console.log('\tInsert: ' + INSERT_TARGET);
      modifiedUnit = unit.replace(source[0], source[0] + '\n' + INSERT_TARGET)
    }

    data = data.replace(unit, modifiedUnit)
  });

  fs.writeFile(file, data, 'utf8', function (err) {
    if (err) throw err;
  });
});
