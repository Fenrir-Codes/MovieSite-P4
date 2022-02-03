import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service'; /* sharedservice is our API service */
import { IMovie } from 'src/app/Interfaces/IMovie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  recentMovies: IMovie[];
  isLoaded: Boolean = false;

  constructor(
    private service: SharedService,
    private router: Router) { }


  ngOnInit(): void {
    //on initalizaton this page, we calling the getmovieByDate method
    this.service.getMovieByDate().subscribe(results => {
      //the recentMovies array filled up with the results
      this.recentMovies = results;
     // console.log(this.recentMovies);

     //checking if the recentMovies has some data
      if (this.recentMovies != null) {
        //if it har so load the slider
        this.isLoaded = true
      }
      else {
        //if recentMovies returns Null , has no data the slider is remain hidden
        this.isLoaded = false
      }

    });
  }

  //not used yet
  clickOnThumbnail(event) {
    console.log(event);

  }
}
