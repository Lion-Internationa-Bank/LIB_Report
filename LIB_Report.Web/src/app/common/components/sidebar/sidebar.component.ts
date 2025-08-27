import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { locale as langEnglish } from '../../../main/lang/en';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Observable, of as observableOf } from 'rxjs';
import { MatExpansionPanel } from '@angular/material/expansion';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;
  isUserLoggedIn: boolean;
  isLoggedIn$: Observable<boolean> = observableOf(true);
  fullNameInLang: string;

  constructor(
    public router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.initModels();
  }

  ngOnInit() {
    // console.log(this.authService.currentUser);

    // console.log(this.currentUser);
    this.getSideBarMenu();
    this.getAccountMenu();
    this.isUserLoggedIn = true;
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  initModels() {
  }



  canOpenExpansionPanel(panel: MatExpansionPanel, path) {
    // check if the path is found in the activated route so that it opens the expansion
    return this.router.url.includes(path);
  }


  logout() {
  }

  private getSideBarMenu() {


  }

  private getAccountMenu() {
   
  }


}
