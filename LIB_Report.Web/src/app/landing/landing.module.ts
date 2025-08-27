import { LandingComponent } from "./landing.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActionsComponent } from "./actions/actions.component";
import { CommonModule } from "@angular/common";
import { OurServicesComponent } from "./our-services/our-services.component";
import { CustomerService } from "./our-services/customer-services.service";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {  MatButtonModule } from "@angular/material/button";
import {MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { TranslateModule } from "@ngx-translate/core";


export const routes: Routes = [
  { path: "", component: LandingComponent, pathMatch: "full" },
];

@NgModule({
  declarations: [
    LandingComponent,
    ActionsComponent,
    OurServicesComponent,
    // ContentHeaderComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    TranslateModule,
  ],
  exports: [ActionsComponent],
  providers: [CustomerService],
})
export class LandingModule {}
