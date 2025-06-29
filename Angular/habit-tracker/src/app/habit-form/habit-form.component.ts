import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HabitFrequency } from '../habit';

@Component({
  selector: 'app-habit-form',
  template: `
     <form [formGroup]="habitForm"
      (ngSubmit)="onSubmit(habitForm.value)" class="habit-form">
        <label for="name">Habit Name:</label>
        <input id="name" formControlName="name" placeholder="Enter habit name">
        
        <label for="frequency">Frequency:</label>
        <select id="frequency" formControlName="frequency" class="frequency-select">
          <option value="" disabled>Select frequency</option>
          <option *ngFor="let freq of frequencyOptions" [value]="freq.value">
            {{freq.label}}
          </option>
        </select>

        <label for="description">Description:</label>
        <textarea id="description" formControlName="description" placeholder="Enter habit description"></textarea>

        <button type="submit">Add Habit</button>
        <div 
          class="error-message"
         *ngIf="habitForm.invalid && (habitForm.dirty || habitForm.touched)">
          <div
           *ngIf="habitForm.get('name')?.errors?.['required']">Habit name is required.</div>
          <div *ngIf="habitForm.get('frequency')?.errors?.['required']">Frequency is required.</div>
          <div *ngIf="habitForm.get('description')?.errors?.['required']">Description is required.</div>
        </div>
      </form>
  `,
  styles: [
    `
    form {
      margin-bottom: 20px;
    }
    .habit-form {
      background-color: #f5f5f5;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input, textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #bdc3c7;
      border-radius: 5px;
    }
    button {
      background-color: #3498db;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .frequency-select {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #bdc3c7;
      border-radius: 5px;
    }
    button:hover {
      background-color: #2980b9;
    }
    strong {
      color: #34495e;
    }
    .error-message {
      color: red;
      font-size: 0.9em;
      margin-top: 10px;
    }
    `
  ]
})
export class HabitFormComponent {

  habitForm!: any;
  @Output() addHabit = new EventEmitter<any>();

  frequencyOptions = [
    { value: HabitFrequency.DAILY, label: 'Daily' },
    { value: HabitFrequency.WEEKLY, label: 'Weekly' },
    { value: HabitFrequency.MONTHLY, label: 'Monthly' },
    { value: HabitFrequency.YEARLY, label: 'Yearly' }
  ];


  constructor(
    private fb: FormBuilder
  ) {
    this.habitForm = this.fb.group({
      name: ['', Validators.required],
      frequency: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(habitData: any) {
    if (this.habitForm.invalid) {
      this.habitForm.markAllAsTouched();
      return;
    }
    this.addHabit.emit(habitData);
    this.habitForm.reset();
  }
}
