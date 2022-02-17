import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProfile } from 'src/app/Interfaces/IProfile';
import { IMovie } from 'src/app/Interfaces/IMovie';
import { IDirector } from 'src/app/Interfaces/IDirector';
import { IOrder } from 'src/app/Interfaces/IOrder';

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

  //#region login function 
  login(Email: string, Password: string): Observable<IProfile[]> {
    return this.http.post<IProfile[]>(
      `${this.ApiUrl}Profiles/Login?Email=${Email}&Password=${Password}`,
      httpOptions
    );
  }
  //#endregion

  //#region Get API Calls

  /* get all the movies from the database listed */
  getAllMoviesListed(): Observable<IMovie[]> {
    /* Getting all movies to show on home */
    return this.http.get<IMovie[]>(this.ApiUrl + 'Movies', httpOptions);
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
    return this.http.get<IProfile[]>(this.ApiUrl + 'Profiles' , httpOptions);
  }

  getUserById(id: number): Observable<IProfile[]> {
    return this.http.get<IProfile[]>(
      this.ApiUrl + 'Profiles/' + id,
      httpOptions
    );
  }

  getAllOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.ApiUrl + 'Orders', httpOptions);
  }

  getOrderById(id: number): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.ApiUrl + 'Orders' + id, httpOptions);
  }

  getAllDirectors(): Observable<IDirector[]> {
    /* Getting all users*/
    return this.http.get<IDirector[]>(this.ApiUrl + 'Directors', httpOptions);
  }

  getDirectorByDirectorId(id: number): Observable<IDirector[]> {
    return this.http.get<IDirector[]>(
      this.ApiUrl + 'Directors/' + id,
      httpOptions
    );
  }

  //#endregion

  //#region Create API calls

  createNewUser(body: any): Observable<IProfile[]> {
    return this.http.post<IProfile[]>(
      this.ApiUrl + `Profiles/`,
      body,
      httpOptions
    );
  }

  createMovie(body: any): Observable<IMovie[]> {
    return this.http.post<IMovie[]>(this.ApiUrl + `Movies`, body, httpOptions);
  }

  //#endregion

  //#region Update API calls

  updateUser(id: number, body: any): Observable<IProfile[]> {
    return this.http.put<IProfile[]>(
      this.ApiUrl + `Profiles/${id}`,
      body,
      httpOptions
    );
  }

  //#endregion

  //#region Delete API calls 

  deleteUser(id: number) {
    return this.http.delete(this.ApiUrl + `Profiles/${id}`);
  }

  deleteMovie(id: number) {
    return this.http.delete(this.ApiUrl + `Movies/${id}`);
  }

  //#endregion


}
