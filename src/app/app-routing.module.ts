import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { MoviesComponent } from 'src/app/Components/movies/movies.component';
import { AdminComponent } from './Components/admin/admin.component';
import { ErrorComponent } from './Components/error/error.component';
import { LoginComponent } from './Components/login/login.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { ProfileComponent } from './Components/profile/profile.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Movies', component: MoviesComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Admin', component: AdminComponent},
  { path: 'Profile', component: ProfileComponent },
  { path: 'MovieDetails', component: MovieDetailsComponent},
  { path: 'Movies', component: MoviesComponent},


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
