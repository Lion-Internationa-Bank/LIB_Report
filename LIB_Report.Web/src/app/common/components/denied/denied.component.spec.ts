import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {Router} from '@angular/router';
import {AccessDeniedComponent} from './denied.component';

describe('AccessDeniedComponent', () => {
  let component: AccessDeniedComponent;
  let fixture: ComponentFixture<AccessDeniedComponent>;
  beforeEach(() => {
    const routerStub = {navigate: array => ({})};
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AccessDeniedComponent],
      providers: [{provide: Router, useValue: routerStub}]
    });
    fixture = TestBed.createComponent(AccessDeniedComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('goHome', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();
      component.goHome();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
