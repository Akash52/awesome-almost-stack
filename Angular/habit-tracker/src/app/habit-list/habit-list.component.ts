// HabitListComponent shows all habits in a list and provides buttons to edit, view details, or delete each habit.
//
// - It subscribes to the HabitService to get the current list of habits and updates automatically when the data changes.
// - The component template uses *ngFor to render each habit and provides action buttons for user interaction.
// - When a button is clicked, the component navigates to the appropriate route or calls the service to update the data.
//
// Key Angular Concepts:
// - @Component: Declares this class as an Angular component
// - *ngFor: Structural directive to loop over a list
// - @Input/@Output: Used for data flow between components (see child components)
// - Observable: Used for async data (from the service)
import { Component, OnInit } from '@angular/core';
import { HabitService } from '../habit.service';
import { Habit } from '../habit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habit-list',
  template: `
    <div class="habit-list">
      <ul>
        <li *ngFor="let habit of habits">
          <span>{{ habit.name }} ({{ habit.frequency }})</span>
          <div class="btn-group">
            <button (click)="editHabit(habit.id)">Edit</button>
            <button (click)="viewDetail(habit.id)">Detail</button>
            <button (click)="deleteHabit(habit.id)">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .habit-list {
      max-width: 600px;
      margin: 40px auto;
      padding: 40px 28px 32px 28px;
    }
    h2 {
      color: #2563eb;
      margin-bottom: 24px;
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-align: center;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 8px #e0e0e0;
      padding: 18px 20px;
      margin-bottom: 18px;
      transition: box-shadow 0.2s, transform 0.2s;
    }
    li:hover {
      box-shadow: 0 6px 18px #b6c2e1;
      transform: translateY(-2px) scale(1.01);
    }
    span {
      font-size: 1.1em;
      font-weight: 500;
      color: #22223b;
    }
    .btn-group {
      display: flex;
      gap: 8px;
    }
    button {
      background: #2563eb; /* Primary blue */
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 6px 16px;
      font-size: 1em;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s, box-shadow 0.2s;
      box-shadow: 0 1px 2px #e0e0e0;
    }
    button:hover {
      background: #174ea6; /* Slightly darker blue */
    }
    button:nth-child(1) { /* Edit */
      background: #2563eb;
    }
    button:nth-child(1):hover {
      background: #174ea6;
    }
    button:nth-child(2) { /* Detail */
      background: #64748b; /* Neutral gray */
    }
    button:nth-child(2):hover {
      background: #475569;
    }
    button:nth-child(3) { /* Delete */
      background: #f87171; /* Soft red */
    }
    button:nth-child(3):hover {
      background: #dc2626;
    }
    @media (max-width: 700px) {
      .habit-list {
        padding: 18px 4vw;
      }
      li {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        padding: 14px 10px;
      }
      .btn-group {
        width: 100%;
        justify-content: flex-end;
      }
    }
  `]
})
export class HabitListComponent implements OnInit {
  // Array to hold the list of habits
  habits: Habit[] = [];

  constructor(private habitService: HabitService, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to the habits observable to keep the list reactive
    this.habitService.getHabits().subscribe(habits => this.habits = habits);
  }
  // Navigate to the edit habit form
  editHabit(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  // Navigate to the habit detail view
  viewDetail(id: number): void {
    this.router.navigate(['/detail', id]);
  }

  // Delete a habit from the list
  deleteHabit(id: number): void {
    // Use the service to delete and persist
    this.habitService.deleteHabit(id);
  }
}
