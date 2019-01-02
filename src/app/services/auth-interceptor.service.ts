import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { mergeMap } from 'rxjs/operators';
import { Token } from '../classes/token';

@Injectable()

export class AuthInterceptorService implements HttpInterceptor {

  constructor(private auth: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.includes('/token')) {
      return next.handle(req);
    }

    let request = req.clone();

    return this.auth.getToken().pipe(mergeMap(token => {

      const localToken = new Token(token.access_token);
      localStorage.setItem('token', JSON.stringify(localToken));

      request = req.clone({
        setHeaders: { 'authorization': `Bearer ${localToken.access_token}` }
      });

      return next.handle(request);

    }));
  }
}
