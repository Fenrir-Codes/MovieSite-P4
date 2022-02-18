import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, Validators } from '@angular/forms';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';

@Component({
  selector: 'app-createmovie',
  templateUrl: './createmovie.component.html',
  styleUrls: ['./createmovie.component.scss']
})
export class CreatemovieComponent implements OnInit {
  //#region Local variables
  movieForm: any;
  success: boolean = false;
  error: boolean = false;
  message: string = 'Successfully added.';
  errorMessage: any = 'Something went wrong!';
  directors = [];
  //#endregion

  constructor(private fb: FormBuilder, private service: SharedService) { }

  //#region Language list Hardcoded Array
  languageList: string[] = [
    'Arabic',
    'Bengali',
    'Czech',
    'Danish',
    'Dutch',
    'English',
    'Egyptian Arabic',
    'French',
    'German',
    'Greek',
    'Hindi',
    'Italian',
    'Hungarian',
    'Japanese',
    'Norwegian',
    'Russian',
    'Slovak',
    'Spanish',
    'Swedish',
    'Urdu'

  ];
  //#endregion

  //#region Country list Hardcoded Array
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
  //#endregion

  //#region Genre list Hardcoded
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
  //#endregion

  //#region Duration array Hardcoded
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
  //#endregion

  //#region Rating array Hardcoded
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
  //#endregion

  ngOnInit(): void {
    this.initMovieForm();
    this.getDirectorsToArray();

  }

  //#region Initalize the movie Form
  initMovieForm(){
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
  }
  //#endregion

  //#region Add movie Function
  addMovie(body: any) {
    //console.log(body);
    this.service.createMovie(body).subscribe(res => {
      console.log(res);

      if (res != null) {
        this.success = true;
        setTimeout(() => {
          this.success = false;
          this.ngOnInit();
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
  //#endregion

  //#region Get all directors to Array
  getDirectorsToArray() {
    this.service.getAllDirectors().subscribe(data => {
      this.directors = data;
      //console.log(this.directors);

    })
  }
  //#endregion

  //#region Function for getting the image name and extension to string
  //setting the thumb image and Image value with this click event
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
  //#endregion


}
