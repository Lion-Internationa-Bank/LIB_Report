import {NgModule} from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import {ToastrModule} from 'ngx-toastr';
import {MainComponent} from './main.component';
import {RouterModule} from '@angular/router';


import { SidebarModule } from '../common/components/sidebar/sidebar.module';
import { MatToolbarModule } from '@angular/material/toolbar';

export const routes = [
  {
    path: '',
    component: MainComponent, children: [
      {path: 'app', loadChildren: () => import('./components/report/reporting.module').then(m => m.ReportingModule)}
    ]
  }
];

@NgModule({ declarations: [
        MainComponent,
        
    ],
    exports: [],
    imports: [
      ToastrModule.forRoot(),
      RouterModule.forChild(routes)], providers: [
      provideHttpClient(withInterceptorsFromDi()),
      //SidebarModule
    ] })
export class MainModule {
}
