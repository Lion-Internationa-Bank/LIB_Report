import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import {  MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {NotFoundComponent} from './not-found.component';

export const routes: Routes = [
  {path: '', component: NotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    NotFoundComponent

  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule, MatIconModule,
    FlexLayoutModule, MatButtonModule
  ]

})
export class NotFoundModule {
}
