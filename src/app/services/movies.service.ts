import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie/movie.model';
import { Observable } from 'rxjs';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY_PARAM = '?api_key=dc8c3e15d71c57db725a5e69a2d4be59';
const API_LANGUAGE_PARAM = '&language=en-EN';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }


  getAllPopulars(): Observable<Movie[]> {
    return this.http.get<Movie[]>(API_URL + 'movie/popular' +API_KEY_PARAM + API_LANGUAGE_PARAM);
  }

  get(id:number): Observable<Movie>  {
    return this.http.get(`${API_URL}/movie/${id}${API_KEY_PARAM + API_LANGUAGE_PARAM}`)
  }
}
