import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';
import { IMovie } from 'src/app/Interfaces/IMovie';
import { UpdateMovieComponent } from '../../Actions/UpdateMovie/update-movie/update-movie.component';
import { Tokenservice } from 'src/app/Back-END/Services/Storage-Crypting/TokenService';

@Component({
  selector: 'app-tableofmovies',
  templateUrl: './tableofmovies.component.html',
  styleUrls: ['./tableofmovies.component.scss']
})
export class TableofmoviesComponent implements OnInit {
  //#region Local variables
  isLoaded: boolean = false;
  filter: string = '';
  message: any;
  movie: any;
  movieList: IMovie[] = [];
  columnsDisplayed: string[] = ['Id', 'Image', 'Title', 'Language',
    'Country', 'Genre', 'Duration', 'Releasedate', 'AddedDate', 'Update', 'Delete'];

  //#endregion

  constructor(private service: SharedService,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog,
    private tokenService: Tokenservice) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getAllMovies();

  }

  //#region Get all movies function
  getAllMovies() {
    this.service.getAllMoviesListed().subscribe(res => {
      this.movieList = res;
      if (this.movieList != null) {
        this.isLoaded = true;

      }
      //console.log(this.movieList);


    });
  }
  //#endregion

  //#region Delete movie by id function
  deleteMovie(id: any) {
    this.service.deleteMovie(id).subscribe(res => {
      this.message = res;
      /* if res == null should show success message */
      console.log(this.message);
      this.ngOnInit(); // refreshing the list calling oninit again.

    });
  }
  //#endregion

  //#region Filter function
  applyFilter(event: any) {
    //console.log(event);
    this.filter = event;
  }
  //#endregion

  //#region Open dialog function
  //dialog for update user profile
  openDialog(id: any) {
    this.service.getMovieById(id).subscribe(data => {
      this.movie = data;
      console.log(this.movie);

      this.dialog.open(UpdateMovieComponent, {
        disableClose: true,
      });

      this.tokenService.enCryptKey('movieUpdateToken', this.movie);
    });
  }
  //#endregion

}
