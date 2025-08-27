import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  constructor(private httpClient: HttpClient) { }

  private readonly _getChangePasswordUrl: string = 'api/Account/ChangePassword';
  
  get getChangePasswordUrl() {
    return environment.loginUrl + this._getChangePasswordUrl;
  }

  ChangePassword(password):Observable<any>{
    return this.httpClient.put(this.getChangePasswordUrl,password)
  }

}
