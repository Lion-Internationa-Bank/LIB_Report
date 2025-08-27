import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarDashboardComponent} from './toolbar-dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTooltipModule } from '@angular/material/tooltip';
import {LangSwitcherModule} from '../../../../@lib_report/components/lang-switcher/lang-switcher.component';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [ToolbarDashboardComponent],
  exports: [
    ToolbarDashboardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    LangSwitcherModule,
    MatMenuModule,
    TranslateModule,
    MatButtonModule,
    RouterModule,
    MatTooltipModule
  ]
})
export class ToolbarDashboardModule {
}
