import { Component, Input, OnInit } from '@angular/core';
import { Habit } from './../habit';

@Component({
  selector: 'app-habit-details',
  templateUrl: './habit-details.component.html',
  styleUrls: ['./habit-details.component.css'],
})
export class HabitDetailsComponent implements OnInit {
  @Input()
  habit!: Habit;

  constructor() {}

  ngOnInit(): void {}
}
