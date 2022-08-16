import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from '../common/movie';
import { Moviecategory } from '../common/moviecategory';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  
  userURL : string ="http://localhost:8080/api/user"
  movieURL : string ="http://localhost:8080/api/movie"
  moviecategoryURL : string ="http://localhost:8080/api/moviecategory"
  bookingURL : string ="http://localhost:8080/api/booking"
  ticketURL : string ="http://localhost:8080/api/ticket"


  constructor(private httpClient: HttpClient) { }


  getAllMovies(): Observable<Movie[]> {
    return this.httpClient.get<GetMovieResponse>(this.movieURL)
      .pipe(map(response=>response._embedded.movies));
  }

  getAllMoviecategorys(): Observable<Moviecategory[]> {
    return this.httpClient.get<GetMoviecategoryResponse>(this.moviecategoryURL)
      .pipe(map(response=>response._embedded.movieCategories));
  }
  
  getMovieById(movieId:number):Observable<Movie>{
    const movieURL = this.movieURL+"/"+movieId;
    return this.httpClient.get<Movie>(movieURL);
  }

  updateMovie(movie:Movie):Observable<Movie>{
    const httpOptions={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization' :'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.put<Movie>(this.movieURL+`/${movie.movie_id}`,movie,httpOptions);
  }

  deleteMovie(movieId:number):Observable<Movie>{
    const httpOptions={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization' :'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.delete<Movie>(this.movieURL+`/${movieId}`,httpOptions);
  }

  saveMovie(movie: Movie):Observable<Movie>{
    const httpOptions={
      headers:new HttpHeaders({
      'content-type':'application/json',
      'Authorization' :'auth-token',
      'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.post<Movie>(this.movieURL,movie,httpOptions);
 }

 getMoviesByMoviecategoryId(mcid:number):Observable<Movie[]>{
  const movieByMoviecategoryIdUrl = "http://localhost:8080/api/movie/search/findByMoviecategoryId?mcid=" + mcid;
  return this.httpClient.get<GetMovieResponse>(movieByMoviecategoryIdUrl).pipe(map(response=> response._embedded.movies));
  }

  getMovieBySearchName(moviename: string) : Observable<Movie[]>{

    const searchUrl = "http://localhost:8080/api/movie/search/findByMoviename?moviename="+moviename; //this.getMoviesBySearchName;
    return this.httpClient.get<GetSearchByMoviename>(searchUrl).
    pipe(map(response=>response._embedded.movies));
  }
   
  saveUser(user: User):Observable<User>{
    const httpOptions={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization' :'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.post<User>(this.userURL,user,httpOptions);
  }
}

interface GetMovieResponse{
  _embedded :{
    movies : Movie[]
  }
}

interface GetMoviecategoryResponse{
  _embedded:{
    movieCategories: Moviecategory[]
  }
}

interface GetSearchByMoviename{
  _embedded : {
    movies :Movie[]
 }
}
