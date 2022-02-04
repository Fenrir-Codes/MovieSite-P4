import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { AdminComponent } from './Components/admin/admin.component';
import { CreateuserComponent } from './Components/admin/createuser/createuser.component';
import { ErrorComponent } from './Components/error/error.component';
import { LoginComponent } from './Components/login/login.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { ProfileComponent } from './Components/profile/profile.component';

/* {path: <base-path>, component: <component>, outlet: <target_outlet_name>}  alternative router outlet, not used yet*/


/* children is a child component of a component ex: admin component has a chils
as createuser component. used for: the child component should show up in its parent component window*/

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Movies', component: MoviesComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Admin', component: AdminComponent, 
    children: [
    { path: 'CreateUser', component: CreateuserComponent}] 
  },
  { path: 'Profile', component: ProfileComponent },
  { path: 'MovieDetails', component: MovieDetailsComponent},


  { path: 'Error', component: ErrorComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' }, /* default route it will show the main page if something has no route */
  { path: '**', redirectTo: 'Error' },   /* 404 page, if a page has a invalid path */

];

const extraRouterOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, extraRouterOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
