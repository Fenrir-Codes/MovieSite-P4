import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  //slider array
  imageObject = [{
    image: './assets/air.jpg',
    thumbImage: './assets/air.jpg',
    alt: 'alt of image',
  },
  {
    image: './assets/clifford.jpg',
    thumbImage: './assets/clifford.jpg',
    alt: 'alt of image',
  }]
  ngOnInit(): void {

  }

}
