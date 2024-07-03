import { Component } from '@angular/core';

@Component({
  template: `
    <!-- resource-string.service.ts -->
    <span i18n="Dialog Titel@@rsDialogDismissChangesTitle">Ungespeicherte Daten</span>
    <span i18n="Dialog Langtext@@rsDialogDismissChangesDetails">Einige Änderungen wurden noch nicht gespeichert. Möchte Sie die Seite trotzdem verlassen?</span>
    <span i18n="Dialog Accept-Button@@rsDialogDismissChangesAccept">Seite verlassen</span>
    <span i18n="Dialog Abort-Button@@rsDialogDismissChangesClose">Auf Seite bleiben</span>
    <span i18n="Fehlermeldung Überschrift@@errorGeneralUnknownErrorTitle">Unbekannter Fehler</span>
    <span i18n="Fehlermeldung Langtext@@errorGeneralUnknownErrorDetails">Es ist ein unbekannter Fehler aufgetreten</span>
    <span i18n="Fehlermeldung Überschrift@@errorGeneralSessionExpiredTitle">Sitzung abgelaufen</span>
    <span i18n="Fehlermeldung Langtext@@errorGeneralSessionExpiredDetails">Ihre aktuelle Sitzung ist abgelaufen. Laden Sie die Seite neu, um sich erneut anzumelden.</span>
    <span i18n="Fehlermeldung Überschrift@@errorGeneralResourceNotFoundTitle">Die Seite existiert nicht</span>
    <span i18n="Fehlermeldung Langtext@@errorGeneralResourceNotFoundDetails">Die angegebene URL funktioniert nicht mehr.</span>

    <!-- dummy.component.ts -->
    <span i18n="Eine Beschreibung@@idTextCode">Ein Text mit Übersetzung im Code</span>
  `
})
export class LocalizeComponent {
  // Diese Komponente ist nur ein Dummy, bis Angular die Extraktion von Übersetzungen aus TypeScript unterstützt
}
