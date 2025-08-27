import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule } from '@angular/material/card';
import {MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {  MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DxReportViewerModule } from 'devexpress-reporting-angular';
import { LoanStatementComponent } from './loan-statement/loan-statement.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { DateAdapter, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { AuthGuard } from '../../../auth/guards/auth.guard';



const routes: Routes = [
  {  path: 'employee', component: EmployeeInfoComponent, canActivate: [AuthGuard]},

];
@NgModule({
  declarations: [
    LoanStatementComponent,
    EmployeeInfoComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatCheckboxModule, 
    MatSelectModule, 
    MatDatepickerModule,
    MatNativeDateModule ,
    DxReportViewerModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
  ],
  providers: []
})
export class ReportingModule { }
