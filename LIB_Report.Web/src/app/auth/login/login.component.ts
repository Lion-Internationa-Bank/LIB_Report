import { Component, OnInit } from '@angular/core';
import { LoginResult } from '../model/LoginResult';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '../model/LoginRequest';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  implements OnInit {
      title?: string;
      loginResult?: LoginResult;
      form:FormGroup;
      hide:boolean =true; 
      constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private authService: AuthService,
      private fb: FormBuilder,
      private ngxLoader: NgxUiLoaderService) {
      }
      ngOnInit() {
        this.form = this.fb.group ({
        userName: ['', [Validators.required,Validators.pattern(/^[a-zA-Z0-9_.-]*$/)]],
        password: ['', Validators.required]
        });
      }
      onSubmit() {
        this.ngxLoader.start();
        var loginRequest = <LoginRequest>{};
        loginRequest.userName = this.form.controls['userName'].value;
        loginRequest.password = this.form.controls['password'].value;
        this.authService
        .login(loginRequest)
        .subscribe(result => {
          this.ngxLoader.stop();
        this.loginResult = result;
        if (result.success && result.token) {
          this.authService.setLogoutTimer();
          if(result.mustChangePassword){
            this.router.navigateByUrl('/changepassword');
            return;
          }
          this.authService.isAdministrator();
          if(this.authService.HrReportViewer){
            this.router.navigateByUrl('/app/employee');
          }
          else {
         this.router.navigateByUrl('/denied');
         
        }
        }
        }, error => {
        console.log(error);
        if (error.status == 401) {
        this.loginResult = error.error;
        }
        this.ngxLoader.stop();
        });

      }
      get userName() {
        return this.form.get('userName');
      }
    
      get password() {
        return this.form.get('password');
      }
    
    }
    