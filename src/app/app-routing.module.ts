import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { MoviesComponent } from 'src/app/Components/movies/movies.component';
import { AdminComponent } from './Components/admin/admin.component';
import { CreatemovieComponent } from './Components/admin/Actions/createmovie/createmovie.component';
import { CreateuserComponent } from './Components/admin/Actions/createuser/createuser.component';
import { ErrorComponent } from './Components/error/error.component';
import { LoginComponent } from './Components/login/login.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AdminhomeComponent } from './Components/admin/adminhome/adminhome.component';
import { TableofprofilesComponent } from './Components/admin/Tables/tableofprofiles/tableofprofiles.component';
import { TableofmoviesComponent } from './Components/admin/Tables/tableofmovies/tableofmovies.component';
import { RegisterComponent } from './Components/register/register.component';
import { UpdateUserComponent } from './Components/admin/Actions/UpdateUser/update-user/update-user.component';
import { UpdateMovieComponent } from './Components/admin/Actions/UpdateMovie/update-movie/update-movie.component';
import { PlansComponent } from './Components/plans/plans.component';

/* {path: <base-path>, component: <component>, outlet: <target_outlet_name>}  alternative router outlet, not used yet*/


/* children is a child component of a component ex: admin component has a chils
as createuser component. used for: the child component should show up in its parent component window*/

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Movies', component: MoviesComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'BuyPlan', component: PlansComponent },
  { path: 'UpdateUser', component: UpdateUserComponent },
  { path: 'UpdateUser', component: UpdateMovieComponent },
  { path: 'Admin', component: AdminComponent, 
    children: [
      { path: '', redirectTo: 'AdminHome', pathMatch: 'full' }, 
      { path: 'AdminHome', component: AdminhomeComponent},
      { path: 'CreateUser', component: CreateuserComponent},
      { path: 'CreateMovie', component: CreatemovieComponent},
      { path: 'ListProfiles', component: TableofprofilesComponent},
      { path: 'ListMovies', component: TableofmoviesComponent},
    ]
  },
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
