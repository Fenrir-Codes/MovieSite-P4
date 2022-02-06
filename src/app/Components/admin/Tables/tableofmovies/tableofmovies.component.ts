import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';
import { IMovie } from 'src/app/Interfaces/IMovie';

@Component({
  selector: 'app-tableofmovies',
  templateUrl: './tableofmovies.component.html',
  styleUrls: ['./tableofmovies.component.scss']
})
export class TableofmoviesComponent implements OnInit {
  isLoaded: boolean = false;
  message: any;
  tableHeaderColumns: string[] = ['Id', 'Image', 'Title','Language','Country','Genre','Duration','Releasedate','Actions'];
  movieList: IMovie[] = [];


  constructor(private service : SharedService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(){
    this.service.getAllMoviesListed().subscribe(res =>{
      this.movieList = res; 
      if (this.movieList != null)
      {
        this.isLoaded = true;
      }
      //console.log(this.movieList);
       
      
    });
  }

  deleteMovie(id:any){
    this.service.deleteMovie(id).subscribe(res =>{
      this.message = res;
      console.log(this.message);
      this.ngOnInit(); // refreshing the list calling oninit again.
      
    });
    //console.log(id);
    

    
  }

}
