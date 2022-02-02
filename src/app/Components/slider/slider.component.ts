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
    this.service.getMovieByDate().subscribe(results => {
      this.recentMovies = results;
      console.log(this.recentMovies);

      if (this.recentMovies != null) {
        this.isLoaded = true
      }
      else {
        this.isLoaded = false
      }

    });
  }

  clickOnThumbnail(event) {
    console.log(event);

  }
}
