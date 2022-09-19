import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie= {
    title: '',
    original_title:'',
    overview:'',
    release_date:'',
    poster_path:'',
    vote_count:''
  }

  charId: number = 1;

  token : string | null | undefined;

  constructor(  private route: ActivatedRoute,
    private movieService: MoviesService,
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.route.queryParams
        .subscribe(params => {
          console.log(params); // { id: 1 }
          this.charId = params['id'];
        }

      );


      this.getMovie();
  }

  getMovie() {

    this.movieService.get(this.charId)
      .subscribe(
        (data) => {
          this.movie = data;
        },
        (error) => {
          console.log('There has been a problem');
        }
      );
  }

}
