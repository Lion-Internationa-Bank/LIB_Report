import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule } from '@angular/material/list';
import {MatMenuModule } from '@angular/material/menu';
import {MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTooltipModule } from '@angular/material/tooltip';
import {RouterModule} from '@angular/router';
import {MainModule} from '../../../main/main.module';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [SidebarComponent],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatProgressBarModule,
    RouterModule,
    FlexModule,
    TranslateModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    ExtendedModule,
    MatTooltipModule,
  ],
  providers: []
})
export class SidebarModule {
}
