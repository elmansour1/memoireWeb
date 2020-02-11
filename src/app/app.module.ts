import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AccueilComponent } from './accueil/accueil.component';
import { ComponentModule } from './component/component.module';


import { AuthenticationService }  from './service/authentication.service';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { LogoutComponent } from './logout/logout.component';
import { InscriptionComponent } from './inscription/inscription.component';


import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ProfilComponent } from './profil/profil.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    LogoutComponent,
    InscriptionComponent,
    ProfilComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthenticationService,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
