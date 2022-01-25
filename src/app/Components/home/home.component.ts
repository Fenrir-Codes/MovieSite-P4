import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';     //https://www.npmjs.com/package/ngx-spinner
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service'; /* sharedservice is our API service */


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  // color variable binded to the default angular material spinner NOT USED
  //color: ThemePalette = 'warn';

  //boolean for check if the content loaded
  isLoaded: Boolean = false;
  movieList: any;
  rating: any;
  listOfGenres: string[] = ['Action', 'Adventure', 'Comedy', 'XXX', 'Documentary', 'Sci-fi'];

  constructor(private spinner: NgxSpinnerService, private service: SharedService) { }

  ngOnInit(): void {
     //this line shoud to be here to initialize the custom spinner -> NgxSpinnerService
    this.spinner.show();

    /* getting all the movies function */
    this.service.getAllMoviesListed().subscribe(result => {
      this.movieList = result;

      /* if the movieList array is not null or empty isLoaded boolean set to true , or if null set to false and loading screen show up*/
      if (this.movieList != null) {
        this.isLoaded = true;

      }
      else {
        this.isLoaded = false;

      }


    })


  }

  //example movie array used to demonstrate card
  exampleMovie = [
    {
      "image": 'druk.jpg',
      "title": 'Example Movie',
      'description': 'this is a fucking movie bro',
      "genre": 'Action / Adventure',
      "duration": '96 Min',
      "rating": 6
    }

  ];

}
