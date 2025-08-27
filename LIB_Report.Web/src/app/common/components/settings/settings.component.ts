import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { locale as langEnglish } from './lang/en';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { TranslateService } from '@ngx-translate/core';
import { User, UserSettings } from '../../../../@lib_report/models/user.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsForm: UntypedFormGroup;
  currentLang: string;
  user: UserSettings;
  loadingIndicator: boolean;
  showForm: boolean;
  currentUser: User;


  constructor(
    private fb: UntypedFormBuilder,
    private toastr: ToastrService,
    private ngxUiLoader: NgxUiLoaderService,
    private translate: TranslateService
  ) {
    this.initModels();

  }

  initModels() {
    this.user = new UserSettings();
    this.user = {
      Email: this.currentUser.Email,
      PhoneNumber: this.currentUser.PhoneNumber,
      Language: this.currentUser.Language
    };
    this.createForm();

  }


  ngOnInit() {

  }


  createForm() {
    this.settingsForm = this.fb.group({
      Language: [this.user.Language, [Validators.required]],
     
    });
  }


  public onSubmit() {

    this.ngxUiLoader.start();

  }

  private saveCompleted(user?: UserSettings) {


  }


  get phoneNumber() {
    return this.settingsForm.get('PhoneNumber');
  }

  get email() {
    return this.settingsForm.get('Email');
  }

  get userName() {
    return this.settingsForm.get('UserName');
  }

  get language() {
    return this.settingsForm.get('Language');
  }


  compareIds(id1: any, id2: any) {
  }

}




