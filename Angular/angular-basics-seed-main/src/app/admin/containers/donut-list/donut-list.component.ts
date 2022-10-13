import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <h1>Donut List</h1>
      <div>
        {{ donut.name }}
      </div>
    </div>
  `,
  styles: [],
})
export class DonutListComponent implements OnInit {
  donuts!: any[];
  donut: any;

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
