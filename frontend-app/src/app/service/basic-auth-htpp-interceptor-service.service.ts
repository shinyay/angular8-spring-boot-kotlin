import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import {} from './authentication.service'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorServiceService implements HttpInterceptor {

  constructor() { }

  intercept(
    req: import("@angular/common/http").HttpRequest<any>,
    next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
      if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')) {
        req = req.clone({
          setHeaders: {
            Authorization: sessionStorage.getItem('basicauth')
          }
        })
      }
      return next.handle(req);
  }
}
