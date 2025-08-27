import { Component, OnInit } from '@angular/core';
import { BrowserLoadedDetectionService } from '@lib_report/services/browser-detect.service';
import { ConfigurationService } from '@lib_report/services/configuration.service';
import { TranslationLoaderService } from '@lib_report/services/translation-loader.service';
import { locale as langEnglish } from './lang/en';

@Component({
  selector: 'app-result-not-found',
  templateUrl: './result-not-found.component.html',
})
export class ResultNotFoundComponent implements OnInit {
  private currentLang: string;

  constructor(private configService: ConfigurationService,
    private translationLoaderService: TranslationLoaderService) {
    BrowserLoadedDetectionService.isBrowser.subscribe(isBrowser => {
      if (isBrowser) {
        this.currentLang = this.configService.language;

      }
    });
    this.translationLoaderService.loadTranslations(langEnglish);
  }

  ngOnInit() {
  }

}
