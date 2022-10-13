import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <app-donut-list> </app-donut-list>
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
  handleClick(event: Event) {
    console.log(event);
  }
  handleInput(event: Event) {
    this.message = (event.target as HTMLInputElement).value;
  }
}
