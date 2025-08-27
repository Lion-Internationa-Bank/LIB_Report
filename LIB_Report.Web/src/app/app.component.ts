
import { isPlatformBrowser } from '@angular/common';
import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
// import { FacebookService, InitParams } from 'ngx-facebook';
 
import {NgxUiLoaderService} from 'ngx-ui-loader';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  static isBrowser = new BehaviorSubject<boolean>(false);
  constructor( private router: Router, ngxUiLoaderService: NgxUiLoaderService,@Inject(PLATFORM_ID)  platformId: any) {
    // console.log('isbrowserdfdfdf',BrowserLoadedDetectionService.isBrowser.value)

 
    // const initParams: InitParams = { xfbml:true, version:'v3.2'};
 
    // this.fb.init(initParams);
 
  }
}
