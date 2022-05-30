import { environment } from './../../environments/environment';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class ApiInterceptor implements HttpInterceptor{

  constructor(){}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>>{
    const apiReq =
    req.url.includes('/assets/')?req: req.clone({url: `${environment.api}${req.url}`})
    return next.handle(apiReq);
  }
}
