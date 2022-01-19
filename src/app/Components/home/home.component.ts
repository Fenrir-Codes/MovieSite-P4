import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { NgxSpinnerService } from 'ngx-spinner';     //https://www.npmjs.com/package/ngx-spinner


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
  rating = 0;
  starCount = 5;
  ratingArray: boolean [] = [false,false,false,false,false];  // true = filled star / false = enmpty star
  movieList: any;



  //example movie array used to demonstrate card
  exampleMovie = [
    {
      "image": 'noimage.jpg',
      "title": 'Example Movie',
      "genre": 'Action / Adventure',
      "duration": '96 Min',
      "rating": '5'
    },
    {
      "image": 'noimage.jpg',
      "title": 'Example Movie 2',
      "genre": 'XXX',
      "duration": '106 Min',
      "rating": '5'
    },
    {
      "image": 'noimage.jpg',
      "title": 'Example Movie 3',
      "genre": 'Adventure',
      "duration": '196 Min',
      "rating": '4'
    },
    {
      "image": 'noimage.jpg',
      "title": 'Example Movie 4',
      "genre": 'Drama',
      "duration": '136 Min',
      "rating": '4'
    },
    {
      "image": 'noimage.jpg',
      "title": 'Example Movie 5',
      "genre": 'Action / Adventure',
      "duration": '96 Min',
      "rating": '3'
    },
    {
      "image": 'noimage.jpg',
      "title": 'Example Movie 6',
      "genre": 'Sci-Fi / Action',
      "duration": '115 Min',
      "rating": '2'
    },
    {
      "image": 'noimage.jpg',
      "title": 'Example Movie 7',
      "genre": 'Documentary',
      "duration": '76 Min',
      "rating": '4'
    },
    {
      "image": 'noimage.jpg',
      "title": 'Example Movie 8',
      "genre": 'Shortfilm',
      "duration": '6 Min',
      "rating": '1'
    },
  ];
  
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show(); //this line shoud to be here to initialize the custom spinner -> NgxSpinnerService

    this.movieList = this.exampleMovie;
    

    console.log(this.movieList);
    
    if (this.movieList !=null)
    {
      this.isLoaded = true;
      
    }


  }

}
