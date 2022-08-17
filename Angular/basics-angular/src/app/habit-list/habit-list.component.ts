import { Component, OnInit } from '@angular/core';
import { HabitService } from '../habit.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Habit } from '../habit';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css'],
})
export class HabitListComponent implements OnInit {
  habitFrom: any;

  habits: Observable<Habit[]> | undefined;

  constructor(private habitService: HabitService) {}

  ngOnInit(): void {
    this.habits = this.habitService.getHabits().pipe(
      map((habits) => {
        return habits.map((habit) => {
          habit.streak = habit.count > 5 ? true : false;
          return habit;
        });
      })
    );
  }

  onAddHabit(newHabit: Habit): void {
    this.habitService.addHabit(newHabit);
  }
}
