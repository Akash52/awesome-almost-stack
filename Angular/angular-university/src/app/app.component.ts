import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-university';
  data = {
    name: 'John',
    age: 30,
  };
  onClick() {
    alert('clicked');
  }
  onKeyUp(newName: string) {
    this.data.name = newName;
  }
}
