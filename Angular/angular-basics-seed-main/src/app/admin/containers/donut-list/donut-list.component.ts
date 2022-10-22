import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <ng-container *ngIf="donuts.length; then cards; else noDonuts">
      </ng-container>
      <ng-template #cards>
        <app-donut-card
          *ngFor="let donut of donuts"
          [donut]="donut"
        ></app-donut-card>
      </ng-template>
      <ng-template #noDonuts>
        <p>No donuts available</p>
      </ng-template>
    </div>
  `,
  styles: [],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor() {}

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'abc',
        name: 'Chocolate Glazed',
        icon: 'just-chocolate',
        description:
          'Chocolate glazed donut with chocolate icing and sprinkles',
        price: 1.99,
      },
      {
        id: 'def',
        name: 'Strawberry Frosted',
        icon: 'caramel-swirl',
        description: 'Strawberry frosted donut with rainbow  sprinkles',
        price: 1.99,
        promo: true,
      },
      {
        id: 'ghi',
        name: 'Powdered Sugar',
        icon: 'glazed-fudge',
        description: 'Powdered sugar donut with rainbow sprinkles',
        price: 1.99,
      },
    ];
  }
}
