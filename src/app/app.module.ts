import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';


import { AppComponent } from './app.component';
import { SigInComponent } from './sig-in/sig-in.component';

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UiModule } from './ui/ui.module';
import { AdminService } from './ui/administration/admin.service';
import { StatusColorDirective } from './ui/administration/status-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    SigInComponent,
    SignUpComponent,
    PageNotFoundComponent,
    StatusColorDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    UiModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('id_token');
        }
      }
    })
  ],
  providers: [
    AuthService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
