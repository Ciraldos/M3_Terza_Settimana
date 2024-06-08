import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iMovie } from '../models/i-movie';
import { iMovieFavourites } from '../models/i-movie-favourites';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FavouriteMoviesService {

  constructor(private http:HttpClient,
    private authSrv:AuthService
  ) { }

  favouriteUrl: string = "http://localhost:3000/favourites"

  getFavouriteByUserId(userId:number){
    return this.http.get<iMovieFavourites[]>(`${this.favouriteUrl}?userId=${userId}`)
  }

  create(newMovie:Partial<iMovieFavourites>){
    return this.http.post<iMovieFavourites>(this.favouriteUrl, newMovie)
  }

  delete(id:number){
    return this.http.delete(`${this.favouriteUrl}/${id}`)
  }

  addToFavourite(movie: iMovie){
    const data = this.authSrv.getAccessData()
    const idUser = data?.user.id
    const obj: Partial<iMovieFavourites> = {
      userId: idUser,
      movie: movie,
    };
    this.create(obj).subscribe()
  }
}
