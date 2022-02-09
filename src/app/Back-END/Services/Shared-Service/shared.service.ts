import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProfile } from 'src/app/Interfaces/IProfile';
import { IMovie } from 'src/app/Interfaces/IMovie';
import { IDirector } from 'src/app/Interfaces/IDirector';

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

  constructor(private http: HttpClient) {}

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

  /* get by id function */
  getMovieById(id: number): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.ApiUrl + 'Movies/' + id, httpOptions);
  }

  /* get by date function */
  getMovieByDate(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(
      this.ApiUrl + 'Movies/mostRecentMovies',
      httpOptions
    );
  }

  getAllUsers(): Observable<IProfile[]> {
    /* Getting all users*/
    return this.http.get<IProfile[]>(this.ApiUrl + 'Profiles');
  }

  getUserById(id: number): Observable<IProfile[]> {
    return this.http.get<IProfile[]>(
      this.ApiUrl + 'Profiles/' + id,
      httpOptions
    );
  }

  getDirectorByDirectorId(id: number): Observable<IDirector[]> {
    return this.http.get<IDirector[]>(
      this.ApiUrl + 'Directors/' + id,
      httpOptions
    );
  }

  //create funcrions
  createNewUser(body: any): Observable<IProfile[]> {
    return this.http.post<IProfile[]>(
      this.ApiUrl + `Profiles/`,
      body,
      httpOptions
    );
  }

  //update function
  updateUser(id: number, body: any): Observable<IProfile[]> {
    return this.http.put<IProfile[]>(
      this.ApiUrl + `Profiles/${id}`,
      body,
      httpOptions
    );
  }

  /* delete functions */
  deleteUser(id: number) {
    return this.http.delete(this.ApiUrl + `Profiles/${id}`);
  }

  deleteMovie(id: number) {
    return this.http.delete(this.ApiUrl + `Movies/${id}`);
  }

  
}
