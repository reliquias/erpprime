import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // add authorization header with jwt token if available
    let currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
        request = request.clone({
            setHeaders: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
                "Access-Control-Max-Age": "3600",
                "Access-Control-Allow-Headers": "Content-Type, Accept, X-Requested-With, remember-me",
                "Content-Type": "application/json",
                Authorization: `Bearer ${currentUser.token}`
            }
        });
    }
    console.log('request:' + request);
    return next.handle(request);
  }
}
