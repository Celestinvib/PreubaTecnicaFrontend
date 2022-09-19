import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tv } from '../models/tv/tv.model';
import { Observable } from 'rxjs';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY_PARAM = '?api_key=dc8c3e15d71c57db725a5e69a2d4be59';
const API_LANGUAGE_PARAM = '&language=en-EN';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private http: HttpClient) { }


  getAllPopulars(): Observable<Tv[]> {
    return this.http.get<Tv[]>(API_URL + 'tv/popular' +API_KEY_PARAM + API_LANGUAGE_PARAM);
  }

  get(id:number): Observable<Tv>  {
    return this.http.get(`${API_URL}/tv/${id}${API_KEY_PARAM + API_LANGUAGE_PARAM}`)
  }
}
