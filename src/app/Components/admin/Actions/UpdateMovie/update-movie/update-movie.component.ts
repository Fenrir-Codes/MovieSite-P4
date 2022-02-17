import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';
import { Tokenservice } from 'src/app/Back-END/Services/Storage-Crypting/TokenService';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.scss']
})
export class UpdateMovieComponent implements OnInit {
  //#region Local Variables
  movie: any;
  directors = [];
  updateMovieForm: any;
  message: any;
  success: boolean = false;
  error: boolean = false;
  errorMessage: string = 'Something went wrong';
  //#endregion

  constructor(
    private tokenService: Tokenservice,
    private fb: FormBuilder,
    private service: SharedService) { }

  ngOnInit(): void {
    this.getMovieData();
    this.initForm();
    this.getDirectorsToArray();

  }

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
    { rating: 0.0, value: 0.0 },
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


  //#region Initalize the Update Form
  initForm() {
    this.updateMovieForm = this.fb.group({
      DirectorId: [this.movie[0].directorId, Validators.required],
      Title: [this.movie[0].title],
      Description: [this.movie[0].description],
      Country: [this.movie[0].country],
      Genre: [this.movie[0].genre],
      Image: [this.movie[0].image,],
      Duration: [this.movie[0].duration],
      Language: [this.movie[0].language],
      Releasedate: [this.movie[0].releaseDate],
      AddedDate: [this.movie[0].addedDate],
      Rating: [this.movie[0].rating],
      VideoURL: [this.movie[0].videoUrl],
      ThumbImage: [this.movie[0].thumbImage]

    });
    //console.log(this.updateMovieForm);

  }
  //#endregion

  //#region Getting the movie data from token
  getMovieData() {
    this.movie = this.tokenService.getMovieUpdateToken();
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

  //#region Update function
  updateMovie(id: number, body: any) {

  }
  //#endregion

  //#region cancel function closes the dialog and removes the userUpdateToken from session storage
  cancel() {
    this.tokenService.removeMovieUpdateToken();
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
      this.updateMovieForm.controls['Image'].setValue(fileName);
      //console.log(this.movieForm.get('Image').value);
      let thumbImageName = null;
      thumbImageName = event.target.files[0].name;
      this.updateMovieForm.controls['ThumbImage'].setValue('./assets/' + thumbImageName);

    }

  }
  //#endregion

}
