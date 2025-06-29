import { Component, Input } from '@angular/core';
import { Habit, HabitFrequency } from '../habit';

@Component({
  selector: 'app-habit-detail',
  template: `
    <li [ngStyle]="{
  'background-color': getFrequencyBackgroundColor(habit.frequency),
  'border-left': getFrequencyBorderColor(habit.frequency)
}">
  <h3>{{ habit.name }}</h3>
  <p><strong>Frequency:</strong> 
    <span [style.color]="getFrequencyTextColor(habit.frequency)" 
          [style.font-weight]="'bold'">
      {{ habit.frequency }}
    </span>
  </p>
  <p><strong>Description:</strong> {{ habit.description }}</p>
</li>
  `,
  styles: [
    `
      li {
        background: #ecf0f1;
        margin: 10px 0;
        padding: 15px;
        border-radius: 5px;
      }
      h3 {
        margin: 0;
        color: #2c3e50;
      }
      p {
        margin: 5px 0;
      }
      strong {
        color: #34495e;
      }
    `
  ]
})
export class HabitDetailComponent {

  @Input() habit!: Habit;

  getFrequencyBackgroundColor(frequency: HabitFrequency): string {
    switch (frequency) {
      case HabitFrequency.DAILY:
        return '#ffebee';
      case HabitFrequency.WEEKLY:
        return '#fff3e0';
      case HabitFrequency.MONTHLY:
        return '#e3f2fd';
      case HabitFrequency.YEARLY:
        return '#e8f5e8';
      default:
        return '#f5f5f5';
    }
  }
  
  getFrequencyTextColor(frequency: HabitFrequency): string {
    switch (frequency) {
      case HabitFrequency.DAILY:
        return '#e74c3c';
      case HabitFrequency.WEEKLY:
        return '#f39c12';
      case HabitFrequency.MONTHLY:
        return '#3498db';
      case HabitFrequency.YEARLY:
        return '#27ae60';
      default:
        return '#666666';
    }
  }

  getFrequencyBorderColor(frequency: HabitFrequency): string {
    switch (frequency) {
      case HabitFrequency.DAILY:
        return '4px solid #e74c3c';
      case HabitFrequency.WEEKLY:
        return '4px solid #f39c12';
      case HabitFrequency.MONTHLY:
        return '4px solid #3498db';
      case HabitFrequency.YEARLY:
        return '4px solid #27ae60';
      default:
        return '4px solid #95a5a6';
    }
  }
}
