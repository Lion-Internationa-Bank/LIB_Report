import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { SearchEmployeeParameters } from '../params/searchemployeeparameters';

@Injectable({
  providedIn: 'root'
})
export class LookUpService {


  constructor(private httpClient:HttpClient) { }

  private readonly _getBusinessUnitUrl: string = 'api/LoockUp/GetBusinessUnit';
  private readonly _getJobsTitleUrl: string = 'api/LoockUp/GetJobsTitle';
  private readonly _searchEmployeeUrl: string = 'api/LoockUp/SearchEmployee';

  get getBusinessUnitUrl() {
    return environment.baseUrl + this._getBusinessUnitUrl;
  }

  get getJobsTitleUrl() {
    return environment.baseUrl + this._getJobsTitleUrl;
  }

  get searchEmployeeUrl() {
    return environment.baseUrl + this._searchEmployeeUrl;
  }

  getBusinessUnit(categoryType){
    return this.httpClient.get(`${this.getBusinessUnitUrl}/${categoryType}`)
  }

  getJobsTitle(){
    return this.httpClient.get(`${this.getJobsTitleUrl}`)
  }

  searchEmployee(parameters:SearchEmployeeParameters) {
    const mParams = new HttpParams()
    .append('Unit', parameters.Unit?.toString())
    .append('JobTitle', parameters.JobTitle?.toString())
    .append('Gender', parameters.Gender?.toString())
    .append('EmployementDateFrom', parameters.EmployementDateFrom?.toString())
    .append('EmployementDateTo', parameters.EmployementDateTo?.toString())
    .append('Status', parameters.Status?.toString())
    const endpointUrl = `${this.searchEmployeeUrl}`;
    return this.httpClient.get<any>(endpointUrl, { params: mParams});
  }
}
