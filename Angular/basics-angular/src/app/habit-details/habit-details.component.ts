import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-habit-details',
  templateUrl: './habit-details.component.html',
  styleUrls: ['./habit-details.component.css'],
})
export class HabitDetailsComponent implements OnInit {
  @Input() habit: any;

  constructor() {}

  ngOnInit(): void {}
}
