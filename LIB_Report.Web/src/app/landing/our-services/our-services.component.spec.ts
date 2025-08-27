import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {CustomerService} from './customer-services.service';
import {Router} from '@angular/router';
import {OurServicesComponent} from './our-services.component';

describe('OurServicesComponent', () => {
  let component: OurServicesComponent;
  let fixture: ComponentFixture<OurServicesComponent>;
  beforeEach(() => {
    const customerServiceStub = {
      getServiceList: () => ({forEach: () => ({})})
    };
    const routerStub = {navigate: array => ({})};
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [OurServicesComponent],
      providers: [
        {provide: CustomerService, useValue: customerServiceStub},
        {provide: Router, useValue: routerStub}
      ]
    });
    fixture = TestBed.createComponent(OurServicesComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('services defaults to: []', () => {
    expect(component.services).toEqual([]);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'getServices').and.callThrough();
      component.ngOnInit();
      expect(component.getServices).toHaveBeenCalled();
    });
  });
});
