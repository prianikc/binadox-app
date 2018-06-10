import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { SigInComponent } from './ui/sig-in/sig-in.component';

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth.service';
import { SignUpComponent } from './ui/sign-up/sign-up.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { UiModule } from './ui/ui.module';
import { AdminService } from './ui/administration/admin.service';
import { ModalModule } from 'ngx-bootstrap';
import { AuthGuardService } from './auth-guard.service';
import { AuthInterceptor } from './auth-interceptor';

function gettoken() {
  return localStorage.getItem('id_token');
}

const jwtConf: JwtModuleOptions = {
  config: {
    tokenGetter: gettoken,
    whitelistedDomains: ['lockalhost:3000']
  }
};

@NgModule({
  declarations: [
    AppComponent,
    SigInComponent,
    SignUpComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    UiModule,
    ModalModule.forRoot(),
    JwtModule.forRoot(jwtConf),
  ],
  providers: [
    AuthService,
    AdminService,
    AuthGuardService,
    AuthInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
