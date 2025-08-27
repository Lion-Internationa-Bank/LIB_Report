import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { UserRegistrationService } from '../services/user-registration.service';
import { Router } from '@angular/router';
import {EqualValidator, PASSWORD} from '../../common/helpers/validator'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
  ChangePasswordForm: FormGroup;
  username;
 constructor(private fb: FormBuilder,
             private authservice: AuthService,
             private toastr: ToastrService,
             private userService:UserRegistrationService,
             private router: Router){
   this.ChangePasswordForm = fb.group({
    //  userName:[],
     oldPassword:['',Validators.required],
     passwords:fb.group({
      Password:['',[Validators.required, Validators.pattern(PASSWORD),Validators.minLength(8)]],
      ConfirmPassword:['',[Validators.required, EqualValidator('Password')]]
     }),  });
    //  this.username =authservice.getUsername();
    //  this.ChangePasswordForm.get('userName').setValue(this.username) 
    //  this.ChangePasswordForm.get('userName').disable();
 }

 changePassword(){
  let data = {
    oldPassword:this.ChangePasswordForm.get('oldPassword').value,
    newPassword:this.Password.value
  }
  if(data.newPassword == data.oldPassword){
    this.toastr.error("Old Password and New Password can't be the same.")
    return;
  }
  this.userService.ChangePassword(data).subscribe(res =>{
    if(res.succeeded){
      this.toastr.success("Password Change Successfully");
      this.authservice.logout();
      this.router.navigateByUrl('/');
      return;
    }else{
      this.toastr.error(res.errors[0].description);
    }
  }, error=> {
    if(error.error.PasswordMismatch.length>0)
      this.toastr.error("Old Password is not correct");
  })
 }

 cancel(){

 this.router.navigateByUrl('/');
}

//  get UserName() {
//   return this.ChangePasswordForm.get('userName');
//   }
  get oldPassword() {
    return this.ChangePasswordForm.get('oldPassword');
  }
  get Passwords() {
    return this.ChangePasswordForm.get('passwords');
  }
  get Password() {
    return this.Passwords?.get('Password');
  }
  get ConfirmPassword() {
    return this.Passwords?.get('ConfirmPassword');
  }
}
