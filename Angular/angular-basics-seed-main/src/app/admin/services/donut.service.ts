import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  catchError,
  map,
  of,
  tap,
  throwError,
  retryWhen,
  delay,
  take,
} from 'rxjs';
import { Donut } from '../models/donut.model';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  private donuts: Donut[] = [];
  constructor(private http: HttpClient) {}
  //Service for reading all donuts
  read() {
    if (this.donuts.length) {
      return of(this.donuts);
    }
    return this.http.get<Donut[]>(`/api/donuts`).pipe(
      tap((donuts: Donut[]) => (this.donuts = donuts)),
      retryWhen((errors) => errors.pipe(delay(5000), take(2))),

      catchError(this.handleError)
    );
  }

  //Service for reading a single donut
  readOne(id: string) {
    return this.read().pipe(
      map((donuts: Donut[]) => {
        const donut = donuts.find((donut) => donut.id === id);
        if (donut) {
          return donut;
        }
        return {
          name: '',
          icon: '',
          price: 0,
          description: '',
        };
      }),
      catchError(this.handleError)
    );
  }

  //Service for creating a new donut
  create(payload: Donut) {
    return this.http.post<Donut>(`/api/donuts`, payload).pipe(
      tap((donut: Donut) => {
        this.donuts = [...this.donuts, donut];
      }),
      catchError(this.handleError)
    );
  }

  //Service for updating a donut
  update(payload: Donut) {
    return this.http.put<Donut>(`/api/donuts/${payload.id}`, payload).pipe(
      tap((donut: Donut) => {
        this.donuts = this.donuts.map((item: Donut) => {
          if (item.id === donut.id) {
            return donut;
          }
          return item;
        });
      }),
      catchError(this.handleError)
    );

    console.log(this.donuts);
  }

  //Service for deleting a donut
  delete(payload: Donut) {
    return this.http.delete<Donut>(`/api/donuts/${payload.id}`).pipe(
      tap((donut: Donut) => {
        this.donuts = this.donuts.filter((item: Donut) => item.id !== donut.id);
      }),
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError(() => new Error(error.message));
  }
}
