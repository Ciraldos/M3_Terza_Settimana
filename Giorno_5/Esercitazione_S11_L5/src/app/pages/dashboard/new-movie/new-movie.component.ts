import { MoviesService } from './../../../services/movies.service';
import { Component } from '@angular/core';
import { iMovie } from '../../../models/i-movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrl: './new-movie.component.scss'
})
export class NewMovieComponent {

  newMovie:Partial<iMovie> = {}

  constructor(private movieSrv:MoviesService,
    private router:Router

  ){}

  createMovie(){
    this.movieSrv.create(this.newMovie).subscribe(
      data => {
        this.router.navigate(['/dashboard'])
      }
    )
  }
}
