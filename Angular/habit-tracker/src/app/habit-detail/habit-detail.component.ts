import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habit, HabitFrequency } from '../habit';
import { HabitService } from '../habit.service';

@Component({
  selector: 'app-habit-detail',
  template: `
    <div class="habit-detail-wrapper">
      <div *ngIf="habit; else notFound">
        <div class="habit-detail-card" [ngStyle]="{ 'background': getFrequencyBackgroundColor(habit.frequency), 'border': getFrequencyBorderColor(habit.frequency) }">
          <h3 [ngStyle]="{ 'color': getFrequencyTextColor(habit.frequency) }">{{ habit.name }}</h3>
          <div class="detail-row">
            <span class="label">Frequency:</span>
            <span class="value freq" [ngClass]="habit.frequency.toLowerCase()" [ngStyle]="{ 'color': getFrequencyTextColor(habit.frequency) }">{{ habit.frequency }}</span>
          </div>
          <div class="detail-row">
            <span class="label">Description:</span>
            <span class="value">{{ habit.description }}</span>
          </div>
          <div class="actions">
            <button class="edit-btn" (click)="onEdit()">Edit</button>
            <button class="delete-btn" (click)="onDelete()">Delete</button>
          </div>
        </div>
      </div>
      <ng-template #notFound>
        <div class="not-found">Habit not found.</div>
      </ng-template>
    </div>
  `,
  styles: [`
    .habit-detail-wrapper {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 300px;
    }
    .habit-detail-card {
      background: #f8fafc;
      border-radius: 12px;
      box-shadow: 0 2px 12px rgba(44,62,80,0.08);
      padding: 32px 36px 24px 36px;
      min-width: 320px;
      max-width: 420px;
      margin: 0 auto;
    }
    h3 {
      margin: 0 0 18px 0;
      color: #2c3e50;
      font-size: 1.5em;
      font-weight: 600;
    }
    .detail-row {
      display: flex;
      gap: 10px;
      margin-bottom: 10px;
      font-size: 1.05em;
    }
    .label {
      color: #888;
      font-weight: 500;
      min-width: 90px;
    }
    .value {
      color: #34495e;
      font-weight: 500;
    }
    .freq.daily { color: #3498db; }
    .freq.weekly { color: #7cb342; }
    .freq.monthly { color: #e67e22; }
    .freq.yearly { color: #d35400; }
    .actions {
      margin-top: 18px;
      display: flex;
      gap: 14px;
    }
    .edit-btn, .delete-btn {
      border: none;
      background: #3498db;
      color: #fff;
      font-weight: 500;
      padding: 6px 18px;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .edit-btn:hover {
      background: #217dbb;
    }
    .delete-btn {
      background: #e74c3c;
    }
    .delete-btn:hover {
      background: #c0392b;
    }
    .not-found {
      color: #e74c3c;
      font-size: 1.1em;
      text-align: center;
      margin-top: 40px;
    }
    @media (max-width: 700px) {
      .habit-detail-card {
        padding: 18px 8px 12px 8px;
        min-width: unset;
      }
    }
  `]
})
export class HabitDetailComponent implements OnInit {
  // HabitDetailComponent displays detailed information about a single habit, including its name, frequency, and description.
  //
  // - Fetches the habit by id from the HabitService based on the current route.
  // - Provides buttons to edit or delete the habit, with actions handled via navigation or service calls.
  // - Uses dynamic styles to visually distinguish habits by their frequency.
  //
  // Key Angular Concepts:
  // - @Input: Receives data from parent component
  // - @Output: Emits events to parent component
  // - EventEmitter: Used to send custom events
  // - ngStyle: Binds styles dynamically based on habit frequency

  // Receives a habit object from the parent
  @Input() habit!: Habit;
  // Emits the habit to be edited
  @Output() edit = new EventEmitter<Habit>();
  // Emits the id of the habit to be deleted
  @Output() delete = new EventEmitter<number>();

  constructor(private route: ActivatedRoute, private habitService: HabitService, private router: Router) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.habitService.getHabits().subscribe(habits => {
        this.habit = habits.find(h => h.id === id)!;
      });
    }
  }

  // Returns background color based on frequency
  getFrequencyBackgroundColor(frequency: HabitFrequency): string {
    switch (frequency) {
      case HabitFrequency.DAILY:
        return '#d1f7c4';
      case HabitFrequency.WEEKLY:
        return '#c4e3f7';
      case HabitFrequency.MONTHLY:
        return '#f7eac4';
      case HabitFrequency.YEARLY:
        return '#f7c4c4';
      default:
        return '#f5f5f5';
    }
  }
  
  // Returns text color based on frequency
  getFrequencyTextColor(frequency: HabitFrequency): string {
    switch (frequency) {
      case HabitFrequency.DAILY:
        return '#27ae60';
      case HabitFrequency.WEEKLY:
        return '#2980b9';
      case HabitFrequency.MONTHLY:
        return '#e67e22';
      case HabitFrequency.YEARLY:
        return '#c0392b';
      default:
        return '#2c3e50';
    }
  }
  // Returns border color based on frequency
  getFrequencyBorderColor(frequency: HabitFrequency): string {
    switch (frequency) {
      case HabitFrequency.DAILY:
        return '5px solid #27ae60';
      case HabitFrequency.WEEKLY:
        return '5px solid #2980b9';
      case HabitFrequency.MONTHLY:
        return '5px solid #e67e22';
      case HabitFrequency.YEARLY:
        return '5px solid #c0392b';
      default:
        return '5px solid #bdc3c7';
    }
  }
  // Navigates to the edit form for this habit
  onEdit() {
    this.router.navigate(['/edit', this.habit.id]);
  }
  // Deletes the habit and navigates back to the list
  onDelete() {
    this.habitService.deleteHabit(this.habit.id);
    this.router.navigate(['/habits']);
  }
}
