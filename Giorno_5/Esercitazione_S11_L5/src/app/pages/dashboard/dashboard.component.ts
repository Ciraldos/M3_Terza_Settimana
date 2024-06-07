import { MoviesService } from '../../services/movies.service';
import { iMovie } from '../../models/i-movie'
import { Component } from '@angular/core';
import { FavouriteMoviesService } from '../../services/favourite-movies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  moviesArr: iMovie[] = [];

  constructor(private movieSrv:MoviesService,
    private favSrv:FavouriteMoviesService
  ){}

  ngOnInit(){
    this.movieSrv.getAllMovies().subscribe(movie =>{
      this.moviesArr = movie
    })
  }

  addToFavourites(movie:iMovie){
    this.favSrv.addToFavourite(movie)
  }

  deleteMovie(movie: iMovie) {
    this.movieSrv.delete(movie.id).subscribe(() => {
      this.movieSrv.getAllMovies().subscribe(movies => {
        this.moviesArr = movies;
      });
    });
  }
}
