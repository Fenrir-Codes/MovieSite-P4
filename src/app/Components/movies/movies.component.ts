import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner'; //https://www.npmjs.com/package/ngx-spinner
import { DataService } from 'src/app/Back-END/Services/DataService/data.service';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service'; /* sharedservice is our API service */
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {  // color variable binded to the default angular material spinner NOT USED
  //color: ThemePalette = 'warn';

  //boolean for check if the content loaded
  isLoaded: Boolean = false;
  movieList = [];
  searchText: string = '';
  
  listOfGenres: string[] = [
    'Action',
    'Adventure',
    'Comedy',
    'XXX',
    'Documentary',
    'Sci-fi',
  ];

  //custom styles fort the rating stars
  styles = {
    fontSize: '25px',
  };

  constructor(
    private spinner: NgxSpinnerService,
    private service: SharedService,
    private DataService: DataService,
    private Router: Router
  ) { }

  ngOnInit(): void {
    //this is observable is checking the search filter #text coming from app component,
    //and setting it equal to seachText string on this component
    this.DataService.currentSearchString.subscribe(
      (text) => (this.searchText = text)

    );

    //this line shoud to be here to initialize the custom spinner -> NgxSpinnerService
    this.spinner.show();

    /* getting all the movies function */
    this.service.getAllMoviesListed().subscribe((result) => {
      this.movieList = result;

      /* if the movieList array is not null or empty isLoaded boolean set to true , or if null set to false and loading screen show up*/
      if (this.movieList != null) {
        this.isLoaded = true;

      } else {
        this.isLoaded = false;

      }
    });
  }

  movieCardClicked(id: any) {
    //console.log(id);
    this.DataService.setMovieId(id);
    this.Router.navigate(['/MovieDetails']);

  }

  //example movie array used to demonstrate card
  exampleMovie = [
    {
      image: 'druk.jpg',
      title: 'Example Movie',
      description: 'this is a fucking movie bro',
      genre: 'Action / Adventure',
      duration: '96 Min',
      rating: 6,

    },

  ];
}