import { Component, Inject, ViewChild } from '@angular/core';
import { LookUpService } from '../services/look-up.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  dataSource=new MatTableDataSource([]);
  displayedColumns: string[] = ['fullName','gender', 'datejoined', 'grade', 'Action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public lookupService: LookUpService,
              @Inject(MAT_DIALOG_DATA) public _data,
              private dialogRef: MatDialogRef<EmployeeListComponent>,
              private ngxLoader: NgxUiLoaderService,) 
  {
    this.searchEmployee();
  }
  searchEmployee(){
    this.ngxLoader.start();
    this.lookupService.searchEmployee(this._data).subscribe(res=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.ngxLoader.stop();
    }, error=>{
      this.ngxLoader.stop();
    });
  }

  selectEmployee(EmplID){
   this.dialogRef.close(EmplID);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  

}
