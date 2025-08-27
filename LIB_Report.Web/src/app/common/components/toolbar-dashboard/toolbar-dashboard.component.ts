import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ConfigurationService } from '../../../../@lib_report/services/configuration.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslationLoaderService } from '../../../../@lib_report/services/translation-loader.service';
import { locale as langEnglish } from '../../../auth/lang/en';
import { RouteInfo } from '@common/navigation/route-interface';
import { AuthService } from '../../../../@lib_report/services/security/auth.service';
import { BrowserLoadedDetectionService } from '@lib_report/services/browser-detect.service';

@Component({
  selector: 'app-toolbar-dashboard',
  templateUrl: './toolbar-dashboard.component.html',
  styleUrls: ['./toolbar-dashboard.component.scss']
})
export class ToolbarDashboardComponent implements OnInit {
  @Input() mainNav: any;
  @Input() isUserLoggedIn: boolean;
  @Input() fullNameInLang: string;
  @Input() accountMenuItems: RouteInfo[];
  currentLang: any;

  constructor(
    public configService: ConfigurationService,
    public router: Router,
    public translationService: TranslateService,
    private translationLoaderService: TranslationLoaderService,
    private authService: AuthService
  ) {
    this.translationLoaderService.loadTranslations(langEnglish);
    BrowserLoadedDetectionService.isBrowser.subscribe(isBrowser => {
      if (isBrowser) {
        if (!this.configService.language) {
          this.translationService.setDefaultLang('en');
          this.configService.language = 'en';
        } else {
          this.translationService.use(this.configService.language);
        }
        this.currentLang = this.configService.language;
      }
    });

  }

  ngOnInit() {
  }


  logout() {
    this.authService.logout();
    this.authService.redirectLogoutUser();
  }
}
