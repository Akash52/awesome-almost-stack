import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  habits = [
    {
      id: 1,
      title: 'Read a book',
    },
    {
      id: 2,
      title: 'Do laundry',
    },
    {
      id: 3,
      title: 'Do the dishes',
    },
    {
      id: 4,
      title: 'Do the dishes',
    },
  ];

  constructor() {}

  getHabits(): Observable<any> {
    return of(this.habits);
  }

  addHabit(newHabit: any) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }
}
