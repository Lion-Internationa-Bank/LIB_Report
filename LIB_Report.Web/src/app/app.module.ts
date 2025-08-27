import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {routing} from './app.routing';
import {TranslateModule} from '@ngx-translate/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ngxUiLoaderConfig } from './common/constants/consts';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { LoginLayoutComponent } from './common/components/login-layout/login-layout.component';
import { AuthInterceptor } from './auth/interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserAnimationsModule,
    MatSnackBarModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot(),
    routing,
    //NgxUiLoaderModule
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    MatToolbarModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
    provideHttpClient(withInterceptorsFromDi(),
  ),
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ]
})
export class AppModule {

}
