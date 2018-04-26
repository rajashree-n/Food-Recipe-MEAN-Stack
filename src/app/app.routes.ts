import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from './login/login.component';
import { BookmarkwallComponent } from './bookmarkwall/bookmarkwall.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchComponent } from './search/search.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes : Routes = [
    {path:'', component: WelcomeComponent, pathMatch: 'full'},
    {path: 'welcome',component:  WelcomeComponent, pathMatch: 'full'},
    {path: 'register',component:  RegisterComponent, pathMatch: 'full'},
    {path: 'login', component: LoginComponent,pathMatch: 'full' },
    {path: 'bookmarkwall', component: BookmarkwallComponent,pathMatch: 'full' },
    {path: 'profile', component: ViewProfileComponent,pathMatch: 'full' },
    {path: 'edit', component: EditProfileComponent, pathMatch: 'full'},
    {path: 'search', component: SearchComponent, pathMatch: 'full'},
    {path: 'aboutme', component: AboutMeComponent, pathMatch: 'full'},
    {path: '**', component: NotfoundComponent }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}

export const routing = [
    RouterModule.forRoot(routes)
];