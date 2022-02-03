import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';
import { DataService } from 'src/app/Back-END/Services/DataService/data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  currentMovie: any;
  directorData = [];
  movieId: any;
  isPaid: boolean = false;

  constructor(
    private service: SharedService, /* shared API service call */
    private DataService: DataService, /* this is the dataservice call */
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {

    this.isPaid = true; // ----> test boolean for video container
    /* setting the movieId same as id we passing between components via data service */
    this.DataService.currentId.subscribe((id) => (this.movieId = id));

    /* then calling the get movie by id function */
    this.getMovieDetails();

  }

  /* get the movie by its id */
  getMovieDetails() {
    this.service.getMovieById(this.movieId).subscribe(result => {
      this.currentMovie = result;
      //console.log(this.currentMovie);

      /* if currentMovie not null */
      if (this.currentMovie != null) {
        /* call getDirectorByDirectorId function to get the director for the movie from director table */
        this.service.getDirectorByDirectorId(this.currentMovie[0].directorId).subscribe(dirResult => {
          /* filling up the directorData array with results of dirResult data */
          for (let i = 0; i < dirResult.length; i++) {
            this.directorData.push(dirResult[i])
            //console.log(this.directorData);         
          }

        });
      }
    })


  };

  openWindow() {
    window.open(this.currentMovie[0].videoUrl)
  }

}


