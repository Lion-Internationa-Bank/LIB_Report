import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {DxReportViewerComponent} from 'devexpress-reporting-angular';
import {PreviewElements} from 'devexpress-reporting/dx-webdocumentviewer';
import {UntypedFormBuilder, UntypedFormGroup} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-loan-statement',
  templateUrl: './loan-statement.component.html',
  styleUrl: './loan-statement.component.css'
})
export class LoanStatementComponent implements OnInit {
  @ViewChild(DxReportViewerComponent, { static: false }) viewer: DxReportViewerComponent;
  title = 'DXReportViewerSample';
  reportUrl: string;
  //reportUrl: string = 'ConservationList';
  hostUrl="";
  showReport = false;
  invokeAction: string = 'DXXRDV';
  SearchConservationForm: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder,
              public datepipe: DatePipe) {
                this.hostUrl="http://localhost:54133/"
  }

  ngOnInit(): void {
    this.SearchConservationForm = this.createFrom();
  }


  submitParameter() {
    // this.showReport = true;
    // const DateFrom = "?DateFrom=" + this.datepipe.transform(this.SearchConservationForm.controls['DateFrom'].value, 'yyyy-MM-dd');
    // const DateTo = "&DateTo=" + this.datepipe.transform(this.SearchConservationForm.controls['DateTo'].value, 'yyyy-MM-dd');
    // const status =  "&Status=" +  this.SearchConservationForm.controls['Status'].value;
    // this.reportUrl = 'LoanStatement' + DateFrom + DateTo + status;
    // this.viewer.bindingSender.OpenReport(this.reportUrl);

    this.showReport = true;
    const empId = "?empId=" + this.SearchConservationForm.controls['EmpId'].getRawValue();
   
    this.reportUrl = 'TestReport' + empId;
    this.viewer.bindingSender.OpenReport(this.reportUrl);
  }

  private createFrom() {
    return this.formBuilder.group(
      {
        DateFrom: [''],
        DateTo: [''],
        Status: [''],
        EmpId:[''],
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

}
