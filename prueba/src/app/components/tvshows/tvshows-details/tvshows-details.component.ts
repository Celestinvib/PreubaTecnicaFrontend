import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tv } from 'src/app/models/tv/tv.model';
import { TvService } from 'src/app/services/tv.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-tvshows-details',
  templateUrl: './tvshows-details.component.html',
  styleUrls: ['./tvshows-details.component.css']
})
export class TvshowsDetailsComponent implements OnInit {

  tvShow: Tv= {
    name: '',
    original_name:'',
    overview:'',
    first_air_date:'',
    poster_path:'',
    vote_count:''
  }

  charId: number = 1;

  token : string | null | undefined;

  constructor(private route: ActivatedRoute,
    private tvShowService: TvService,
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); // { id: 1 }
      this.charId = params['id'];
    }

  );


  this.getTvShow();
  }


  getTvShow() {

    this.tvShowService.get(this.charId)
      .subscribe(
        (data) => {
          this.tvShow = data;
        },
        (error) => {
          console.log('There has been a problem');
        }
      );
  }
}
