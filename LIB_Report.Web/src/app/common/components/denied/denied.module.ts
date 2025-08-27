import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {  MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {AccessDeniedComponent} from './denied.component';

export const routes: Routes = [
  {path: '', component: AccessDeniedComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AccessDeniedComponent

  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule, MatIconModule,
    FlexLayoutModule
  ]

})
export class DeniedModule {
}
