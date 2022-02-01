import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service'; /* sharedservice is our API service */
import { IMovie } from 'src/app/Interfaces/IMovie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  movieImageObjects: IMovie[]= [{
    image:'.assets/',
    thumbImage: '',
    alt:''
  }];

  constructor(private service: SharedService) { }

  //slider test array
  imageObject = [{
    image: './assets/air.jpg',
    thumbImage: './assets/air.jpg',
    alt: 'alt of image',
  },
  {
    image: './assets/catchme.jpg',
    thumbImage: './assets/catchme.jpg',
    alt: 'alt of image',
  }
  ,
  {
    image: './assets/ince.jpg',
    thumbImage: './assets/ince.jpg',
    alt: 'alt of image',
  }
  ,
  {
    image: './assets/ghost.jpg',
    thumbImage: './assets/ghost.jpg',
    alt: 'alt of image',
  },
  {
    image: './assets/free.jpg',
    thumbImage: './assets/free.jpg',
    alt: 'alt of image',
  } ,
  {
    image: './assets/dune.jpg',
    thumbImage: './assets/dune.jpg',
    alt: 'alt of image',
  },
  {
    image: './assets/jp.jpg',
    thumbImage: './assets/jp.jpg',
    alt: 'alt of image',
  }]
  
  ngOnInit(): void {
/*     this.service.getAllMoviesListed().subscribe(result => {
      this.movieImageObjects = result;
    }) */
  }

}
