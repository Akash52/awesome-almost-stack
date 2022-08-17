import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { movies } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  getMovies() {
    return of(movies);
  }

  getMovie(id: number) {
    return of(movies.find((movie) => movie.id === id));
  }
}
