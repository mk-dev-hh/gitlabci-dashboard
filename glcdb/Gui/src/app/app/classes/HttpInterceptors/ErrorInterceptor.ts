import { Injectable } from '@angular/core';
import { ErrorService } from '../../../services/error/error.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private errorService: ErrorService, ) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
        catchError((err: HttpErrorResponse) => {
          if ([401, 403, 404].includes(err.status)) {
            const error = this.errorService.getErrorForHttpCode(err.status);
            return throwError(error);
          } else if (err.error && err.error.errorCode) {
            const error = this.errorService.getErrorForErrorCode(err.error.errorCode);
            return throwError(error);
          } else {
            const error = this.errorService.getErrorForErrorCode(-1);
            return throwError(error);
          }
        })
    );
  }

}
