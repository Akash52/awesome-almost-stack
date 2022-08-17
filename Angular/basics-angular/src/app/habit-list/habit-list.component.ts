import { Component, OnInit } from '@angular/core';
import { HabitService } from '../habit.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css'],
})
export class HabitListComponent implements OnInit {
  habitFrom: any;

  habits: Observable<any> | undefined;

  constructor(private habitService: HabitService) {}

  ngOnInit(): void {
    this.habits = this.habitService.getHabits();
  }

  onAddHabit(newHabit: any) {
    this.habitService.addHabit(newHabit);
  }
}
