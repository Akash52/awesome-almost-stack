import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitService } from '../habit.service';
import { Habit, HabitFrequency } from '../habit';

@Component({
  selector: 'app-habit-form',
  template: `
     <form [formGroup]="habitForm"
      (ngSubmit)="onSubmit()" class="habit-form">
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

        <button type="submit" class="editHabit">{{ isEditMode ? 'Update Habit' : 'Add Habit' }}</button>
        <button *ngIf="isEditMode" type="button" (click)="onCancel()">Cancel</button>
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
      font-size: 1em;
      transition: background-color 0.2s;
      gap: 10px;
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
    .editHabit {
     margin-right: 10px;
    }
    `
  ]
})
// HabitFormComponent provides a user interface to add a new habit or edit an existing one.
//
// - Uses Angular Reactive Forms for robust form handling and validation.
// - When editing, it loads the habit data into the form; when adding, it starts with empty fields.
// - On submit, it either adds a new habit or updates the existing one using the HabitService.
// - Includes validation and error messages to guide the user.
//
// Key Angular Concepts:
// - @Component: Declares this class as an Angular component
// - Reactive Forms: Uses FormGroup, FormControl, Validators
// - @Input: Receives the habit to edit (if any)
// - @Output: Emits events for add, update, and cancel actions
// - (ngSubmit): Handles form submission
// - *ngIf: Conditionally displays elements
//
// See the class for more details on form logic and validation.
export class HabitFormComponent implements OnInit {
  habitForm: FormGroup;
  frequencyOptions = [
    { value: 'Daily', label: 'Daily' },
    { value: 'Weekly', label: 'Weekly' },
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Yearly', label: 'Yearly' }
  ];
  isEditMode = false;
  habitId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private habitService: HabitService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.habitForm = this.fb.group({
      name: ['', Validators.required],
      frequency: ['', Validators.required],
      description: ['', Validators.required],
      id: [null]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.habitId = +params['id'];
        const habit = this.habitService.getHabitById(this.habitId);
        if (habit) {
          this.habitForm.patchValue(habit);
        }
      } else {
        this.isEditMode = false;
        this.habitId = null;
        this.habitForm.reset();
      }
    });
  }

  onSubmit() {
    if (this.habitForm.invalid) return;
    if (this.isEditMode && this.habitId !== null) {
      this.habitService.updateHabit(this.habitForm.value);
    } else {
      this.habitService.addHabit(this.habitForm.value);
    }
    this.habitForm.reset();
    this.router.navigate(['/habits']);
  }

  onCancel() {
    this.habitForm.reset();
    this.router.navigate(['/habits']);
  }
}
