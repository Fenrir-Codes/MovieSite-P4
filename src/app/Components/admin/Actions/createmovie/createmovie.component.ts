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

  durationList: string[] = [
    '15 min.',
    '30 min.',
    '45 min.',
    '60 min.',
    '75 min.',
    '90 min.',
    '105 min.',
    '120 min',
    '135 min.',
    '150 min.',
    '165 min.',
    '180 min.',
    '195 min.',
    '210 min.'
  ];

  directors = [] = [
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

  ngOnInit(): void {
/*     rating?: number,
    videoUrl?: string,
    thumbImage?: string */


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
