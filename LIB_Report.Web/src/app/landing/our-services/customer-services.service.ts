import { Injectable } from '@angular/core';

export class CustomerServiceData {
  public Id: number;
  public Desc: string;
  public Title: string;
  public Path: string;
  public Icon: string;
}

export const SERVICES: any[] =
  [
{}
  ];

@Injectable()
export class CustomerService {

  constructor() {
  }

  getServiceList() {
    return SERVICES;
  }
}
