import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { AdminComponent } from './Components/admin/admin.component';
import { ErrorComponent } from './Components/error/error.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { CanActivate } from "@angular/router";
import { Authservice } from './Back-END/Services/Storage-Crypting/Auth-Service';
import { DataService } from './Back-END/Services/DataService/data.service';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Admin', component: AdminComponent },
  { path: 'Profile', component: ProfileComponent },


  { path: 'Error', component: ErrorComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' }, /* default route it will show the main page if something has no route */
  { path: '**', redirectTo: 'Error' },   /* 404 page, if a page has a invalid path */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
