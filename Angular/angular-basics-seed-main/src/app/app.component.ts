import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <header class="app-header" role="banner" aria-label="Application header">
        <img class="app-logo" src="assets/img/logo.svg" alt="Angular Donuts" />
      </header>

      <app-donut-list> </app-donut-list>
      <!-- <app-donut-single></app-donut-single> -->
    </div>
  `,
  styles: [
    `
      .app {
        background-color: #fff;
        border-radius: 8px;
        max-width: 400px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
        padding: 25px;
        margin: 25px auto;
        boredr: 4px solid #ef9fc7;
      }
      .app-header {
        background-color: #ef9fc7;
        border-radius: 8px 8px 0 0;
        padding: 25px;
        margin: -25px -25px 25px;
        text-align: center;
        color: #fff;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  message!: string;
  ngOnInit() {
    this.message = 'Hello World!';
    console.log('Hello World!');
  }
  handleClick(event: Event) {
    console.log(event);
  }
  handleInput(event: Event) {
    this.message = (event.target as HTMLInputElement).value;
  }
}
