import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service'; /* sharedservice is our API service */
import { IMovie } from 'src/app/Interfaces/IMovie';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Back-END/Services/DataService/data.service';
import { LocalService} from 'src/app/Back-END/Services/Storage-Crypting/local.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  recentMovies = [];

  isLoaded: Boolean = false;

  constructor(
    private service: SharedService, private router: Router, private localService: LocalService, private DataService: DataService) { }

  ngOnInit(): void {
    //on initalizaton this page, we vcalling the getmovieByDate method
    this.service.getMovieByDate().subscribe(results => {
      //the recentMovies array filled up with the results
      this.recentMovies = results;
      this.localService.setJsonValue('newlyAddedMovies', this.recentMovies)
       //console.log(this.recentMovies);

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
/*     console.log(event);
    var movie = this.localService.getJsonValue('newlyAddedMovies')
    console.log(movie);

    this.DataService.setMovieId(movie[0].movieId) */
    this.router.navigate(['/Movies']);

  }

}
