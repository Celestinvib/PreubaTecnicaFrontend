import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "https://www.themoviedb.org/"
const API_KEY_PARAM = '?api_key=dc8c3e15d71c57db725a5e69a2d4be59';

const httpOptions = {
  headers: new HttpHeaders ({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
      return this.http.post(API_URL + 'login', JSON.stringify({
        "username": username,
        "password": password}), httpOptions);
  }

  getToken() {
    return this.http.get(API_URL + '3/authentication/token/new'+API_KEY_PARAM);
  }
}
