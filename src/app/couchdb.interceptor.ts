import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CouchdbInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const basicAuth = "Basic " + btoa(environment.dbUsername + ":" + environment.dbPassword);

    const url = environment.url;

        request = request.clone({
            setHeaders: {
                Authorization: `${basicAuth}`,
                Accept: `application/json`
            }
        });

    return next.handle(request);
  }
}
