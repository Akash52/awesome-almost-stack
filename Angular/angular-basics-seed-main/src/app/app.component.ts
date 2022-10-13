import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      {{ message }}
      {{ message === 'Hello World' }}
      {{ message.length ? 'Yes' : 'No' }}
      <h1 [class.red]="message === 'Hello World'"></h1>
      <input type="text" [value]="message" />
    </div>
  `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
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
}
