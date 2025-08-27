import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsComponent} from './settings.component';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';
import { MatInputModule} from '@angular/material/input';
import {TranslateModule} from '@ngx-translate/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import {SharedComponentsModule} from '../../../../@lib_report/modules/shared-components.module';
import {LookUpService} from '@common/services/look-up.service';

export const routes: Routes = [
  {path: '', component: SettingsComponent, pathMatch: 'full'},

];

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FlexModule,
    MatInputModule,
    TranslateModule,
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule,
    SharedComponentsModule
  ],
  providers: [LookUpService]
})
export class SettingsModule {
}
