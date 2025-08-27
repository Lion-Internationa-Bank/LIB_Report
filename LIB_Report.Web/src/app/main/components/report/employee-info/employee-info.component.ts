//import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DxReportViewerComponent } from 'devexpress-reporting-angular';
import { PreviewElements } from 'devexpress-reporting/dx-webdocumentviewer';
import { LookUpService } from '../services/look-up.service';
import { SearchEmployeeParameters } from '../params/searchemployeeparameters';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Router } from '@angular/router';
import { AuthService } from '../../../../auth/services/auth.service';
import { takeUntil } from 'rxjs/internal/operators';
import { Subject } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrl: './employee-info.component.css'
})
export class EmployeeInfoComponent implements OnInit {
  @ViewChild(DxReportViewerComponent, { static: false }) viewer: DxReportViewerComponent;
  title = 'DXReportViewerSample';
  reportUrl: string;
  //reportUrl: string = 'ConservationList';
  hostUrl="";
  showReport = false;
  invokeAction: string = 'DXXRDV';
  SearchEmployee: UntypedFormGroup;
  BusinessCategoryList
  jobsTitleList
  userName
  isLoggedIn = true;
  private destroySubject = new Subject();

  constructor(private formBuilder: UntypedFormBuilder,
              public lookupService: LookUpService,
              public authService: AuthService,
              private router: Router,
              private dialog:MatDialog) 
            {
              this.hostUrl=environment.baseUrl;
              this.getJobsTitle();
              this.authService.authStatus
              .pipe(takeUntil(this.destroySubject))
              .subscribe(result => {
              this.isLoggedIn = result;
              });
              this.userName = this.authService.getUsername();
              
              
  }

  ngOnInit(): void {
    this.SearchEmployee = this.createFrom();
  }

  getbussCategory(type){
    this.lookupService.getBusinessUnit(type).subscribe(res=>{
      this.BusinessCategoryList =res;
      console.log(this.BusinessCategoryList)
    }, error=>{

    });
  }


  submitParameter() {
    this.showReport = true;
    const empId = "?empId=" + this.SearchEmployee.controls['EmpId'].getRawValue();
   
    this.reportUrl = 'EmployeeArchive' + empId;
    this.viewer.bindingSender.OpenReport(this.reportUrl);
  }

  private createFrom() {
    return this.formBuilder.group(
      {
        EmpId:[''],
        Unit: [''],
        Gender: [''],
        JobsTitle: [''],
        EmployementDateFrom: [''],
        EmployementDateTo: [''],
        Status: ['']
      })
  }

  onCustomizeElements(event) {
    var panelPart = event.args.GetById(PreviewElements.RightPanel);
    var index = event.args.Elements.indexOf(panelPart);
    event.args.Elements.splice(index, 1);
  }

  BeforeRender(pEvent: any) {
    pEvent.args.reportPreview.zoom = 1;
    pEvent.args.reportPreview.showMultipagePreview = true;
  }

  categoryTypeChange(type){
    this.getbussCategory(type);
  }

  getJobsTitle(){
    this.lookupService.getJobsTitle().subscribe(res=>{
      this.jobsTitleList =res;
      console.log(this.jobsTitleList)
    }, error=>{

    });
  }

  private getSearchParameters(): SearchEmployeeParameters {
    const params = new SearchEmployeeParameters();
    params.Unit = this.SearchEmployee.controls['Unit'].getRawValue();
    params.Gender = this.SearchEmployee.controls['Gender'].getRawValue();
    params.JobTitle = this.SearchEmployee.controls['JobsTitle'].getRawValue();
    params.EmployementDateFrom = this.SearchEmployee.controls['EmployementDateTo'].getRawValue();
    params.EmployementDateTo = this.SearchEmployee.controls['EmployementDateTo'].getRawValue();
    params.Status = this.SearchEmployee.controls['Status'].getRawValue();
    return params;

  }
  searchEmployee(){
    const dialogRef = this.dialog.open(EmployeeListComponent, {
      data: this.getSearchParameters(),
      width:'750px',
      height:'450px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result){
      this.SearchEmployee.controls['EmpId'].setValue(result);
      this.submitParameter();
      }
    });
  }




  onLogout(): void {
    this.authService.isAdmin=false;
    this.authService.isSuperAdmin=false;
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

  changePassword(){
    this.router.navigate(["/changepassword"]);
  }
}
