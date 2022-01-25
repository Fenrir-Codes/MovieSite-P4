import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProfile } from 'src/app/Interfaces/IProfile';
import { IMovie } from 'src/app/Interfaces/IMovie';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  /* home URL: */
  readonly ApiUrl = 'https://localhost:44371/api/';

  constructor(private http: HttpClient) { }

  /* login function */
  login(Email: string, Password: string): Observable<IProfile[]> {
    return this.http.post<IProfile[]>(
      `${this.ApiUrl}Profiles/Login?Email=${Email}&Password=${Password}`,
      httpOptions
    );
  }

  /* get all the movies from the database listed */
  getAllMoviesListed(): Observable<IMovie[]> {
    /* Getting all movies to show on home */
    return this.http.get<IMovie[]>(this.ApiUrl + 'Movies');
  }




}
