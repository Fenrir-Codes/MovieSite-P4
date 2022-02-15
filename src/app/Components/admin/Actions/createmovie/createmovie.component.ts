import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';

@Component({
  selector: 'app-createmovie',
  templateUrl: './createmovie.component.html',
  styleUrls: ['./createmovie.component.scss']
})
export class CreatemovieComponent implements OnInit {
  movieForm: any;
  success: boolean = false;
  error: boolean = false;
  message: string = 'Successfully added.';
  errorMessage: any = 'Something went wrong!';
  directors = [];

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

  durationList = [] = [
    { value: '15 min.' },
    { value: '30 min.' },
    { value: '45 min.' },
    { value: '60 min.' },
    { value: '75 min.' },
    { value: '90 min.' },
    { value: '105 min.' },
    { value: '120 min.' },
    { value: '135 min.' },
    { value: '150 min.' },
    { value: '165 min.' },
    { value: '180 min.' },
    { value: '195 min.' },
    { value: '210 min.' }
  ];

  ratings = [] = [
    { rating: 1, value: 1 },
    { rating: 2, value: 2 },
    { rating: 3, value: 3 },
    { rating: 4, value: 4 },
    { rating: 5, value: 5 },
    { rating: 6, value: 6 },
    { rating: 7, value: 7 },
    { rating: 8, value: 8 },
    { rating: 9, value: 9 },
    { rating: 10, value: 10 },

  ]

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      DirectorId: [, Validators.required],
      Title: ['', Validators.required],
      Description: ['', Validators.required],
      Country: ['', Validators.required],
      Genre: ['', Validators.required],
      Image: ['noimage.jpg', Validators.required],
      Duration: ['', Validators.required],
      Language: ['', Validators.required],
      Releasedate: [new Date(), Validators.required],
      AddedDate: [new Date()],
      Rating: [0, Validators.required],
      VideoURL: [''],
      ThumbImage: ['']

    });
    this.getDirectorsToArray();

  }

  addMovie(body: any) {
    //console.log(body);
    this.service.createMovie(body).subscribe(res => {
      console.log(res);

      if (res != null) {
        this.success = true;
        setTimeout(() => {
          this.success = false;
          this.movieForm.reset();
        }, 2000);
      }
      else {
        this.error = true
        this.errorMessage + res;
        console.log(this.errorMessage);
        setTimeout(() => {
          this.error = false;
        }, 3000);

      }


    });

  }

  getDirectorsToArray() {
    this.service.getAllDirectors().subscribe(data => {
      this.directors = data;
      console.log(this.directors);

    })
  }

  //setting the tumb image and Image value with this click event
  getFileName(event) {
    //if file input length is not null
    if (event.target.files.length > 0) {
      //fileName variable set to null.
      let fileName = null;
      //adding event target file NAME to fileName variable
      fileName = event.target.files[0].name;
      //setting the value (fileName) to Image 
      this.movieForm.controls['Image'].setValue(fileName);
      //console.log(this.movieForm.get('Image').value);
      let thumbImageName = null;
      thumbImageName = event.target.files[0].name;
      this.movieForm.controls['ThumbImage'].setValue('./assets/' + thumbImageName);

    }

  }


}
