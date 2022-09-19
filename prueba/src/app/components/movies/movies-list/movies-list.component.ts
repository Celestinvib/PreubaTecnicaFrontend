import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { TokenStorageService } from '../../../services/token-storage.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: any = null;

  token : string | null | undefined;

  constructor(private moviesService: MoviesService,
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.moviesService.getAllPopulars()
    .subscribe(
      (result) => {
        this.movies = result;
      },
      (error) => {
        console.log('There has been a problem');
      }
    );
  }
}
