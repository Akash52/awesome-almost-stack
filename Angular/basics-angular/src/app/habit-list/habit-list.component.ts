import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css'],
})
export class HabitListComponent implements OnInit {
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

  ngOnInit(): void {}
}
