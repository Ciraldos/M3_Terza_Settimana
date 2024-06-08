import { iMovie } from "./i-movie";

export interface iMovieFavourites {
  userId: number;
  movie: iMovie;
  id?: number;
}
