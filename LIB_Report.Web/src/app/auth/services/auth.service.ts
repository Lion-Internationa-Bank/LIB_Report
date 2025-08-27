import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../model/LoginRequest';
import { Observable, Subject,  throwError } from 'rxjs';
import { LoginResult } from '../model/LoginResult';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { user } from './user';
import { tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(protected http: HttpClient,
              private router: Router) { }

  private tokenKey: string = "token";
  private refresTokenKey: string = "refreshtoken";
  private _authStatus = new Subject<boolean>();
  public authStatus = this._authStatus.asObservable();

  isAdmin:boolean;
  isSuperAdmin:boolean;
  HrReportViewer:boolean;
  private logoutTimer: any;
  isAuthenticated() : boolean {
  return this.getToken() !== null;
  }
  getToken() : string | null {
    return localStorage.getItem(this.tokenKey);
  }
  getRefreshToken() : string | null {
    return localStorage.getItem(this.refresTokenKey);
  }
  init() : void {
      if (this.isAuthenticated())
      this.setAuthStatus(true);
  }

  login(item: LoginRequest): Observable<LoginResult> {
      var url = environment.loginUrl + "api/Account/Login";
      return this.http.post<LoginResult>(url, item)
      .pipe(tap( loginResult => {
      if (loginResult.success && loginResult.token) {
        console.log(loginResult);
      localStorage.setItem(this.tokenKey, loginResult.token);
      localStorage.setItem(this.refresTokenKey, loginResult.refreshToken);
      
      this.setAuthStatus(true);
      this.isAdministrator();
      } 
      }));
    }
    storeTokens(loginResult){
      localStorage.setItem(this.tokenKey, loginResult.token);
      localStorage.setItem(this.refresTokenKey, loginResult.refreshToken);
    }
   logout() {
      localStorage.removeItem(this.tokenKey);
      localStorage.removeItem(this.refresTokenKey);
      this.setAuthStatus(false);
      clearTimeout(this.logoutTimer); // Clear the logout timer
      this.router.navigate(['/login']);
      }
        
   private setAuthStatus(isAuthenticated: boolean): void {
        this._authStatus.next(isAuthenticated);
    }

    setLogoutTimer() {
      debugger;
      let token = this.getToken();
      let data:user =JSON.parse(atob(token.split('.')[1]))
      const expirationTime  = (Number(data['exp']) + 1800)*1000;
      const currentTime = Date.now();
      let expirationDuration = expirationTime - currentTime;
      this.logoutTimer = setTimeout(() => {
        this.logout();
      }, expirationDuration);
    }

    isAdministrator() {
      let token = this.getToken();
        if( token== null) {
          this.isAdmin= false;
          return;
        }
        let data:user =JSON.parse(atob(token.split('.')[1]))
        let roles=data['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        if(!roles) {
            this.isAdmin= false;
            this.isSuperAdmin =false;
            return;
        }
        this.isAdmin = roles =='Administrator';
        this.isSuperAdmin = roles == 'Super Administrator';
        this.HrReportViewer = roles == 'HR Report Viewer';
      }

      getUsername():string{
        let token = this.getToken();
        if( token== null) {
          this.isAdmin= false;
          this.isSuperAdmin =false;
          return '';
        }
        let data:user =JSON.parse(atob(token.split('.')[1]))
        let userName = data['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
        return userName;
      }

      getRoles():string[]{
        let userRoles = []
        let token = this.getToken();
        if( token== null) {
          this.isAdmin= false;
          this.isSuperAdmin =false;
          return [];
        }
        let data:user =JSON.parse(atob(token.split('.')[1]))
        let roles = data['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        if (Array.isArray(roles)) {
          userRoles = roles; // Store roles as an array
        } else if (roles) {
          userRoles = [roles]; // Ensure it's an array
        }
        return userRoles;
      }

       refreshToken(tokenModel){
        var url = environment.loginUrl + "api/Token/refresh";
        return  this.http.post<any>(url, tokenModel)
      }
   
  }

