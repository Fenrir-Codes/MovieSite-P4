import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, Validators } from '@angular/forms';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';

@Component({
  selector: 'app-createmovie',
  templateUrl: './createmovie.component.html',
  styleUrls: ['./createmovie.component.scss']
})
export class CreatemovieComponent implements OnInit {
  movieForm: any;

  constructor(private fb: FormBuilder, private service: SharedService) { }
  /* list for select fields */
  languageList: string[] = [
    'English',
    'Danish',
    'Hungarian',
    'Swedish',
    'Russian',
    'Spanish',
    'Norwegian'
  ];

  countryList: string[] = [
    'USA',
    'Denmark',
    'Hungary',
    'Sweeden',
    'Russia',
    'Spain',
    'Norway',
    'Italy',
    'Croatia',
    'Romania',
    'Brazil',
    'Canada',
    'Iceland',
    'France',
    'Greece',
    'Japan',
    'China'
  ];

  genreList: string[] = [
    'Action',
    'Adventure',
    'Drama',
    'Crime',
    'Horror',
    'Komedy',
    'Sci-Fi',
    'Family',
    'Documentary',
    'Cartoon',
    'Anime',
    'Animation',
    'XXX'
  ];

  durationList =[] = [
    { selector: null, value: 'Select Duration' },
    { selector: '15 min.', value: '15 min.' },
    { selector: '30 min.', value: '30 min.' },
    { selector: '45 min.', value: '45 min.' },
    { selector: '60 min.', value: '60 min.' },
    { selector: '75 min.', value: '75 min.' },
    { selector: '90 min.', value: '90 min.' },
    { selector: '105 min.', value: '105 min.' },
    { selector: '120 min.', value: '120 min.' },
    { selector: '135 min.', value: '135 min.' },
    { selector: '150 min.', value: '150 min.' },
    { selector: '165 min.', value: '165 min.' },
    { selector: '180 min.', value: '180 min.' },
    { selector: '195 min.', value: '195 min.' },
    { selector: '210 min.', value: '210 min.' }
  ];

  directors = [] = [
    { id: null, value: 'Select Director' },
    { id: 1, value: 'Steven Spielberg' },
    { id: 2, value: 'Cristopher Nolan' },
    { id: 3, value: 'Denis Villeneuve' },
    { id: 4, value: 'Thomas Vinerberg' },
    { id: 5, value: 'Zack Snyder' },
    { id: 6, value: 'Jason Reitman' },
    { id: 7, value: 'Anders Matthesen' },
    { id: 8, value: 'Shawn Levy' },
    { id: 9, value: 'Walter Becker' },
    { id: 10, value: 'David Silverman' },
    { id: 11, value: 'Anthony Ferrante' },
    { id: 12, value: 'Daniel Espinosa' },
    { id: 13, value: 'Chloé Zhao' },
    { id: 14, value: 'Jon Watts' },
  ];

  ratings = [] =[
    {rating: null, value: "Rating"},
    {rating: 1, value: "1"},
    {rating: 2, value: "2"},
    {rating: 3, value: "3"},
    {rating: 4, value: "4"},
    {rating: 5, value: "5"},
    {rating: 6, value: "6"},
    {rating: 7, value: "7"},
    {rating: 8, value: "8"},
    {rating: 9, value: "9"},
    {rating: 10, value: "10"},

  ]

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      DirectorsId: [null, Validators.required],
      Title: [null, Validators.required],
      Description: [null, Validators.required],
      Country: [null, Validators.required],
      Genre: [null, Validators.required],
      Image: [null, Validators.required],
      Duration: [null, Validators.required],
      Language: [null, Validators.required],
      Releasedate: [new Date(), Validators.required],
      AddedDate: [new Date()],
      Rating: [null, Validators.required],
      VideoURL: [null],
      ThumbImage: [null]

    });

  }

  addMovie(body: any) {
    /* this.service.createMovie(body).subscribe(data => {
      console.log(data);
      console.log(this.movieForm);

    }); */
    console.log(body);
    

  }

}
