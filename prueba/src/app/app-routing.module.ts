import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { TvshowsListComponent } from './components/tvshows/tvshows-list/tvshows-list.component';
import { TvshowsDetailsComponent } from './components/tvshows/tvshows-details/tvshows-details.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'movies',
    component: MoviesListComponent
  },
  {
    path: 'movies/movie/:id',
    component: MovieDetailsComponent
  },
  {
    path: 'tvshows',
    component: TvshowsListComponent
  },
  {
    path: 'tvshows/tvshow/:id',
    component: TvshowsDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
