import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  // Wegen Cachingproblemen im IE

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const httpRequest = req.clone({
      setHeaders: {
        CacheCntrol: 'no-cache',
        Pragma: 'no-cache',
        Expires: 'Sat, 01 Jan 2000 00:00:00 GMT'
      }
    });

    return next.handle(httpRequest);
  }
}
