import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, of, tap } from 'rxjs';
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
    return this.http
      .get<Donut[]>(`/api/donuts`)
      .pipe(tap((donuts: Donut[]) => (this.donuts = donuts)));
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
      })
    );
  }

  //Service for creating a new donut
  create(payload: Donut) {
    return this.http.post<Donut>(`/api/donuts`, payload).pipe(
      tap((donut: Donut) => {
        this.donuts = [...this.donuts, donut];
      })
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
      })
    );

    console.log(this.donuts);
  }

  //Service for deleting a donut
  delete(payload: Donut) {
    return this.http.delete<Donut>(`/api/donuts/${payload.id}`).pipe(
      tap((donut: Donut) => {
        this.donuts = this.donuts.filter((item: Donut) => item.id !== donut.id);
      })
    );
  }
}
