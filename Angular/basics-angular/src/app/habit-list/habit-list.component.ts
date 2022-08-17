import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css'],
})
export class HabitListComponent implements OnInit {
  habitFrom: any;

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

  constructor(private formBuilder: FormBuilder) {
    this.habitFrom = this.formBuilder.group({
      title: '',
    });
  }

  onAddHabit(newHabit: any) {
    if (newHabit.title !== '') {
      const id = this.habits.length + 1;
      newHabit.id = id;
      this.habits.push(newHabit);
    }
  }
  ngOnInit(): void {}
}
