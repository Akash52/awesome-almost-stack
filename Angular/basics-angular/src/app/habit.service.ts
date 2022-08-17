import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Habit } from './habit';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  habits: Habit[] = [
    {
      id: 1,
      title: 'Read a book',
      count: 0,
    },
    {
      id: 2,
      title: 'Do laundry',
      count: 1,
    },
    {
      id: 3,
      title: 'Do the dishes',
      count: 10,
    },
    {
      id: 4,
      title: 'Do the dishes',
      count: 10,
    },
  ];

  constructor() {}

  getHabits(): Observable<Habit[]> {
    return of(this.habits);
  }

  addHabit(newHabit: Habit): void {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }
}
