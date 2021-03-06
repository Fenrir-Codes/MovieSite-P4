import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from '../app/Components/home/home.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './Components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './Components/error/error.component';
import { AdminComponent } from './Components/admin/admin.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';  //npm i ng2-search-filter --force
import { MatTabsModule } from '@angular/material/tabs';
import { UpdateProfileComponent } from './Components/profile/update-profile/update-profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgRatingBarModule } from 'ng-rating-bar';
import { NgImageSliderModule } from 'ng-image-slider';
import { SliderComponent } from './Components/slider/slider.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { CreateuserComponent } from './Components/admin/Actions/createuser/createuser.component';
import { CreatemovieComponent } from './Components/admin/Actions/createmovie/createmovie.component';
import { TableofprofilesComponent } from './Components/admin/Tables/tableofprofiles/tableofprofiles.component';
import { MatTableModule } from '@angular/material/table';
import { AdminhomeComponent } from './Components/admin/adminhome/adminhome.component';
import { TableofmoviesComponent } from './Components/admin/Tables/tableofmovies/tableofmovies.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateUserComponent } from './Components/admin/Actions/UpdateUser/update-user/update-user.component';
import { UpdateMovieComponent } from './Components/admin/Actions/UpdateMovie/update-movie/update-movie.component';
import { PlansComponent } from './Components/plans/plans.component';
import { CartComponent } from './Components/cart/cart.component';







@NgModule({
  declarations: [AppComponent,
     HomeComponent,
     LoginComponent, 
     ErrorComponent, 
     AdminComponent, 
     MovieDetailsComponent,
     ProfileComponent,
     UpdateProfileComponent,
     SliderComponent,
     MoviesComponent,
     CreateuserComponent,
     CreatemovieComponent,
     TableofprofilesComponent,
     AdminhomeComponent,
     TableofmoviesComponent,
     UpdateUserComponent,
     UpdateMovieComponent,
     PlansComponent,
     CartComponent,
    
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MatTabsModule,
    MatCheckboxModule,
    MatDialogModule,
    NgRatingBarModule,
    NgImageSliderModule,
    MatTooltipModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,

    

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
