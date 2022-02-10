import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';
import { IMovie } from 'src/app/Interfaces/IMovie';

@Component({
  selector: 'app-tableofmovies',
  templateUrl: './tableofmovies.component.html',
  styleUrls: ['./tableofmovies.component.scss']
})
export class TableofmoviesComponent implements OnInit {
  isLoaded: boolean = false;
  filter: string = '';
  message: any;
  movieList: IMovie[] = [];
  tableHeaderColumns: string[] = ['Id', 'Image', 'Title', 'Language', 'Country', 'Genre', 'Duration', 'Releasedate', 'Actions'];

  constructor(private service: SharedService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getAllMovies();
  }

  getAllMovies() {
    this.service.getAllMoviesListed().subscribe(res => {
      this.movieList = res;
      if (this.movieList != null) {
        this.isLoaded = true;
      }
      //console.log(this.movieList);


    });
  }

  deleteMovie(id: any) {
    this.service.deleteMovie(id).subscribe(res => {
      this.message = res;

      /* if res == null should show success message */
      console.log(this.message);
      this.ngOnInit(); // refreshing the list calling oninit again.

    });
  }

  applyFilter(event: any) {
    //console.log(event);
    this.filter = event;

  }

}
