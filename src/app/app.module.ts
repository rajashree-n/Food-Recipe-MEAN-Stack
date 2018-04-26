import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HttpModule, JsonpModule } from "@angular/http";
import 'rxjs/add/operator/map';
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from "./app.routes";
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { BookmarkwallComponent } from './bookmarkwall/bookmarkwall.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchComponent } from './search/search.component';
import { AboutMeComponent } from './about-me/about-me.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MainComponent,
    WelcomeComponent,
    EditProfileComponent,
    NavBarComponent,
    ViewProfileComponent,
    LogoutComponent,
    LoginComponent,
    BookmarkwallComponent,
    NotfoundComponent,
    SearchComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    AppRoutingModule,   
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
