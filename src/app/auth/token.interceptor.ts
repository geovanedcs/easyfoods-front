import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/internal/Observable';
import {tap} from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('authToken');
    const tokenSession = sessionStorage.getItem('access_token');

    if (tokenSession) {
      token = tokenSession;
    }

    req = req.clone({
      withCredentials: true,
    });

    req = req.clone({
      headers: req.headers.set('Accept-Language', navigator.language),
    });

    const sessionTokenMessage = sessionStorage.getItem('Session-Token-Message');
    if (sessionTokenMessage) {
      req = req.clone({
        headers: req.headers.set('Session-Token-Message', sessionTokenMessage),
      });
    }

    if (token && !req.headers.has('Authorization')) {

      const authReqWithBearer = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token),
      });

      return next.handle(authReqWithBearer).pipe(
        tap(() => {
        }, err => {
          if (err.status === 403) {
            this.router.navigate(['/401']).catch(reason => console.log(reason));
          }
          // else if (err.status === 401) {
          //   // this.loginService.loggout();
          // }
        })
      );
    }

    return next.handle(req);
  }
}
