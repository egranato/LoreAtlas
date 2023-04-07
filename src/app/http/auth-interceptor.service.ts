import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { accessToken, refreshToken } = this.authService.getTokens();

    const headers: {
      [name: string]: string | string[];
    } = {};

    if (accessToken) headers['Authorization'] = `Bearer ${accessToken}`;
    if (refreshToken) headers['x-refresh'] = refreshToken;

    req = req.clone({
      url: req.url,
      setHeaders: headers,
    });
    return next.handle(req).pipe(
      tap((httpEvent) => {
        if (httpEvent.type === 0) {
          return;
        }
        if (httpEvent instanceof HttpResponse) {
          if (httpEvent.headers.has('x-access-token')) {
            const newToken = httpEvent.headers.get('x-access-token');
            this.authService.updateAccessToken(newToken);
          }
        }
      })
    );
  }
}
