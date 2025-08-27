import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, 
HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {LoginResult} from '../model/LoginResult'
import { from, Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/internal/operators';
@Injectable({
 providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
 constructor(
 private authService: AuthService,
 private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): 
    Observable<HttpEvent<any>> {
        // get the auth token
        var token = this.authService.getToken();
        // if the token is present, clone the request
        // replacing the original headers with the authorization
        if (token) {
        req = req.clone({
        setHeaders: {
        Authorization: `Bearer ${token}`
        }
        });
        }
        // send the request to the next handler
        return next.handle(req).pipe(
        catchError((error:any) => {
        // Perform logout on 401 – Unauthorized HTTP response errors
        if (error instanceof HttpErrorResponse){
        if (error.status === 401) {
        // this.authService.logout();
          //this.router.navigate(['login']);
        //console.log('un Autotized')
         return this.handelUnAuthError(req,next);
        }}
        return throwError(error);
        })
        );
    }

     handelUnAuthError(req: HttpRequest<any>, next: HttpHandler) {
        let tokenModel={
            token: this.authService.getToken(),
            refreshToken: this.authService.getRefreshToken()
        }
         return this.authService.refreshToken(tokenModel).
          pipe(
            switchMap((res:LoginResult)=>{
               if (res.success && res.token) {
                    this.authService.storeTokens(res);
                   const req1 = req.clone({
                        setHeaders: {
                        Authorization: `Bearer ${res.token}`
                        }  })
                        
                        return next.handle(req1)
                } else {
                    return throwError(()=>{
                        this.authService.logout();
                        this.router.navigate(['login']);
                      })
                }
                    
            }),catchError(err=>{
              return throwError(()=>{
                this.authService.logout();
                this.router.navigate(['login']);
              })
            }))
        //)
    }

    refreshTokenMethod(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      let tokenModel={
        token: this.authService.getToken(),
        refreshToken: this.authService.getRefreshToken()
    }
      return from(this.authService.refreshToken(tokenModel)).pipe(
        switchMap((res: any) => {
          // this.signupService.clearLoginResponse();
          //this.signupService.saveResponse(JSON.stringify(res));
          request = request.clone({
            setHeaders: {
              Authorization: 'Bearer ' + res.access_token,
            },
          });
          return next.handle(request);
        }),
        catchError((error) => {
          //Refresh Token Issue.
          if (error.status == 403) {
            this.router.navigate(['login']);
          }
          return throwError(() => error);
        })
      );
    }

}