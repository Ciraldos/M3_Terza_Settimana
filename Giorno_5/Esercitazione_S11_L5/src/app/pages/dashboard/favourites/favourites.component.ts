import { Component, OnInit } from '@angular/core';
import { FavouriteMoviesService } from '../../../services/favourite-movies.service';
import { iMovieFavourites } from '../../../models/i-movie-favourites';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'] // Usa "styleUrls" al plurale per array
})
export class FavouritesComponent implements OnInit {

  favMovies: iMovieFavourites[] = [];

  constructor(
    private favSrv: FavouriteMoviesService,
    private authSrv: AuthService
  ) {}

  ngOnInit() {
    const data = this.authSrv.getAccessData();
    const idUser = data?.user.id;
    if (idUser) {
      this.favSrv.getFavouriteByUserId(idUser).subscribe((movies: iMovieFavourites[]) => {
        this.favMovies = movies;
      });
    }
  }


deleteFav(favourite: iMovieFavourites) {
  if (favourite.id) {
    this.favSrv.delete(favourite.id).subscribe(() => {
      this.favSrv.getFavouriteByUserId(favourite.userId).subscribe(movies => {
        this.favMovies = movies;
      });
    });
  }
}

}
