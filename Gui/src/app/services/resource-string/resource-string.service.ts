import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceStringService {

  constructor() { }

  public dialogs = {
    dismiss_changes: {
      title: $localize`:Dialog Titel@@rsDialogDismissChangesTitle:Ungespeicherte Daten`,
      details: $localize`:Dialog Langtext@@rsDialogDismissChangesDetails:Einige Änderungen wurden noch nicht gespeichert. Möchte Sie die Seite trotzdem verlassen?`,
      acceptButtonText: $localize`:Dialog Accept-Button@@rsDialogDismissChangesAccept:Seite verlassen`,
      closeButtonText: $localize`:Dialog Abort-Button@@rsDialogDismissChangesClose:Auf Seite bleiben`,
    }
  };

  public errors = {

    general: {
      unknown_error: {
        title: $localize`:Fehlermeldung Überschrift@@errorGeneralUnknownErrorTitle:Unbekannter Fehler`,
        details: $localize`:Fehlermeldung Langtext@@errorGeneralUnknownErrorDetails:Es ist ein unbekannter Fehler aufgetreten`
      },
      session_expired: {
        title: $localize`:Fehlermeldung Überschrift@@errorGeneralSessionExpiredTitle:Sitzung abgelaufen`,
        details: $localize`:Fehlermeldung Langtext@@errorGeneralSessionExpiredDetails:Ihre aktuelle Sitzung ist abgelaufen. Laden Sie die Seite neu, um sich erneut anzumelden.`
      },
      resource_not_found: {
        title: $localize`:Fehlermeldung Überschrift@@errorGeneralResourceNotFoundTitle:Die Seite existiert nicht`,
        details: $localize`:Fehlermeldung Langtext@@errorGeneralResourceNotFoundDetails:Die angegebene URL funktioniert nicht mehr.`
      }
    }

  };
}
