import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ConfigurationService} from '@lib_report/services/configuration.service';
import {TranslationLoaderService} from '@lib_report/services/translation-loader.service';
import {ResultNotFoundComponent} from './result-not-found.component';

describe('ResultNotFoundComponent', () => {
  let component: ResultNotFoundComponent;
  let fixture: ComponentFixture<ResultNotFoundComponent>;
  beforeEach(() => {
    const configurationServiceStub = {language: {}};
    const translationLoaderServiceStub = {
      loadTranslations: (langEnglish, langEthiopic,langOromifa) => ({})
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ResultNotFoundComponent],
      providers: [
        {provide: ConfigurationService, useValue: configurationServiceStub},
        {
          provide: TranslationLoaderService,
          useValue: translationLoaderServiceStub
        }
      ]
    });
    fixture = TestBed.createComponent(ResultNotFoundComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
