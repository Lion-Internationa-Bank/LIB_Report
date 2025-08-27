import {Component, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import {NgxUiLoaderService} from 'ngx-ui-loader';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private currentLang: string;
  userActivity;
  userInactive: Subject<any> = new Subject();

  constructor(private translationService: TranslateService,
              public router: Router,
              private ngxLoader: NgxUiLoaderService,
  ) {
  

  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.ngxLoader.start();
        const getUrl = event;
        if (getUrl.url !== getUrl.url.toLowerCase()) {
          this.router.navigateByUrl((getUrl.url.toLowerCase()));
          this.ngxLoader.start();
        }
      } else if (event instanceof NavigationEnd) {
        this.ngxLoader.stop();
      } else {
        this.ngxLoader.stop();
      }
    });


  }

  @HostListener('window:mousemove') refreshUserState() {
    clearTimeout(this.userActivity);
  }


}
