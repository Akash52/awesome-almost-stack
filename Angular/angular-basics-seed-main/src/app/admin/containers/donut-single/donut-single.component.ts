import { Component, OnInit } from '@angular/core';
import { Donut } from './../../models/donut.model';

@Component({
  selector: 'app-donut-single',
  template: `
    <div>
      <app-donut-form [donut]="donut" (create)="onCreate($event)">
      </app-donut-form>
    </div>
  `,
  styles: [],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;
  constructor() {}

  ngOnInit(): void {
    this.donut = {
      id: 'dawds',
      name: 'Chocolate',
      price: 1.99,
      description: 'Chocolate donut',
      promo: 'limited',
      icon: 'just-chocolate',
    };
  }
  onCreate(donut: Donut) {
    console.log('Donut created', donut);
  }
}
