import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginService } from './login.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './auth.guard';
import { MainBodyComponent } from './main-body/main-body.component';
import { MyURLListComponent } from './my-urllist/my-urllist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
    { path: '', component: MainBodyComponent },
    { path: 'myUrl', component: MyURLListComponent }
  ] },
  { path: 'signUp', component: SignUpComponent },
  { path: ' convert', component: MainBodyComponent },
  { path: '' , component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    HeaderComponent,
    MainBodyComponent,
    MyURLListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
