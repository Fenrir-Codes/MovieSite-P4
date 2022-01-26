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
  currentMovie = [];
  movieId: any;

  constructor(
    private service: SharedService, /* shared API service call */
    private DataService: DataService, /* this is the dataservice call */
    private sanitizer : DomSanitizer
  ) { }

  ngOnInit(): void {
    /* setting the movieId same as id we passing between components via data service */
    this.DataService.currentId.subscribe((id) => (this.movieId = id));

    /* then calling the get movie by id function */
    this.getMovieDetails();

  }

  /* get the movie by its id */
  getMovieDetails() {
    this.service.getMovieById(this.movieId).subscribe(result => {
      this.currentMovie = result;
      console.log(this.currentMovie);




    });

  }




}


