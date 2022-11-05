import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  private donuts: Donut[] = [
    {
      id: 'y8z0As',
      name: 'Just Chocolate',
      icon: 'just-chocolate',
      price: 119,
      promo: 'limited',
      description: 'For the pure chocoholic.',
    },
    {
      id: '3u98Kl',
      name: 'Glazed Fudge',
      icon: 'glazed-fudge',
      price: 129,
      promo: 'new',
      description: 'Sticky perfection.',
    },
    {
      id: 'ae098s',
      name: 'Caramel Swirl',
      icon: 'caramel-swirl',
      price: 129,
      description: 'Chocolate drizzled with caramel.',
    },
    {
      id: '8amkZ9',
      name: 'Sour Supreme',
      icon: 'sour-supreme',
      price: 139,
      description: 'For the sour advocate.',
    },
    {
      id: 'l3M0nz',
      name: 'Zesty Lemon',
      icon: 'zesty-lemon',
      price: 129,
      description: 'Delicious lucious lemon.',
    },
  ];
  constructor() {}
  //Service for reading all donuts
  read() {
    return this.donuts;
  }

  //Service for reading a single donut
  readOne(id: string) {
    const donut = this.read().find((donut) => donut.id === id);
    if (donut) {
      return donut;
    }
    return {
      name: '',
      icon: '',
      price: 0,
      description: '',
    };
  }

  //Service for creating a new donut
  create(payload: Donut) {
    this.donuts = [...this.donuts, payload];
    console.log(this.donuts);
  }
  //Service for updating a donut
  update(payload: Donut) {
    this.donuts = this.donuts.map((donut) => {
      if (donut.id === payload.id) {
        return payload;
      }
      return donut;
    });
    console.log(this.donuts);
  }
}
