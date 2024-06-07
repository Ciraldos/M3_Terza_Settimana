import { Injectable } from '@angular/core';
import { iMovie } from '../models/i-movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  moviesUrl:string = 'http://localhost:3000/movies-popular'
  getAllMovies() {
    return this.http.get<iMovie[]>(this.moviesUrl)
  }

  getById(id: number) {
    return this.http.get<iMovie[]>(`${this.moviesUrl}/${id}`)
  }
  create(newMovie:Partial<iMovie>){
    return this.http.post<iMovie>(this.moviesUrl, newMovie)
  }

  update(movie:iMovie){
    return this.http.put(`${this.moviesUrl}/${movie.id}`,movie)
  }

  delete(id:number){
    return this.http.delete(`${this.moviesUrl}/${id}`)
  }
  loadMovies(): Observable<iMovie[]> {
    return this.getAllMovies();
  }
}
