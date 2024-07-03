import { Injectable } from '@angular/core';
import { ResourceStringService } from '../resource-string/resource-string.service';
import { NotificationMsg } from '../notification/msg.dto';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private resourceStrings: ResourceStringService) { }

  public getErrorForErrorCode(errorCode: number): NotificationMsg {
    switch (errorCode) {
      case 0:
        return this.resourceStrings.errors.general.unknown_error;
      default:
        return this.resourceStrings.errors.general.unknown_error;
    }
  }

  public getErrorForHttpCode(httpCode: number): NotificationMsg {
    switch (httpCode) {
      case 401:
        return this.resourceStrings.errors.general.session_expired;
      case 403:
        return this.resourceStrings.errors.general.session_expired;
      case 404:
        return this.resourceStrings.errors.general.resource_not_found;
      default:
        return this.resourceStrings.errors.general.unknown_error;
    }
  }
}
