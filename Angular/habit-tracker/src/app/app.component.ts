import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>{{ title }}</h1>
    <app-habit-list></app-habit-list>
  </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    h1 {
      text-align: left;
      color: #2c3e50;
      font-size: 2.5em;
    }
  `]
})
export class AppComponent {
  title = 'Habit Tracker';
}
