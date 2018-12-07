import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable()
export class UrlInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let apiReq;
    if(req.url.includes('https://www.instagram.com')){
      apiReq = req.clone({url: req.url});
    }else{
      apiReq = req.clone({url: environment.serverUrl+req.url});
    }
    return next.handle(apiReq);
  }
}
