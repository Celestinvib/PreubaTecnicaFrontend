import { Component, OnInit } from '@angular/core';
import { TvService } from '../../../services/tv.service';
import { TokenStorageService } from '../../../services/token-storage.service';

@Component({
  selector: 'app-tvshows-list',
  templateUrl: './tvshows-list.component.html',
  styleUrls: ['./tvshows-list.component.css']
})
export class TvshowsListComponent implements OnInit {

  tvshows: any = null;

  constructor(private tvShowsService: TvService,
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.getPopularTvShows();
  }


  getPopularTvShows() {
    this.tvShowsService.getAllPopulars()
    .subscribe(
      (result) => {
        this.tvshows = result;
      },
      (error) => {
        console.log('There has been a problem');
      }
    );
  }

}
