import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HabitService } from '../habit.service';
import { Observable } from 'rxjs';
import { Habit } from '../habit';

@Component({
  selector: 'app-habit-list',
  template: `
    <ul>
    <app-habit-form (addHabit)="addHabit($event)"></app-habit-form>
     <app-habit-detail *ngFor="let habit of habits | async" [habit]="habit"></app-habit-detail>
    </ul>
  `,
  styles: [
    `
      h2 {
        text-align: center;
        color: #2c3e50;
      }
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        background: #ecf0f1;
        margin: 10px 0;
        padding: 15px;
        border-radius: 5px;
      }
    `
  ]
})
export class HabitListComponent implements OnInit {

  habits!: Observable<Habit[]>;
  constructor(private habitService : HabitService){}


  addHabit(habitData: Habit) {
    this.habitService.addHabit(habitData)
  }
  ngOnInit() {
    this.habits = this.habitService.getHabits();
  }
}