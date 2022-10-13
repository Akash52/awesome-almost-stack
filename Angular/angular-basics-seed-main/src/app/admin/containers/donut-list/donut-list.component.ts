import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <h1>Donut List</h1>
      <div>
        {{ donut.name }}
        {{ donut.price }}
        {{ donut.description }}
      </div>
    </div>
  `,
  styles: [],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];
  donut!: Donut;

  constructor() {}

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'abc',
        name: 'Chocolate Glazed',
        icon: 'just-chocolate-glazed',
        description:
          'Chocolate glazed donut with chocolate icing and sprinkles',
        price: 1.99,
      },
      {
        id: 'def',
        name: 'Strawberry Frosted',
        icon: 'just-strawberry-frosted',
        description: 'Strawberry frosted donut with rainbow sprinkles',
        price: 1.99,
      },
      {
        id: 'ghi',
        name: 'Powdered Sugar',
        icon: 'just-powdered-sugar',
        description: 'Powdered sugar donut with rainbow sprinkles',
        price: 1.99,
      },
    ];
    this.donut = this.donuts[0];
  }
}
