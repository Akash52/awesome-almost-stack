import { Component, Input, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-card',
  template: `
    <a
      class="donut-card"
      [routerLink]="donut.id"
      [ngClass]="{
        'donut-card-promo': donut.promo,
        'donut-card-border': !donut.promo
      }"
    >
      <img src="/assets/img/{{ donut.icon }}.svg" [alt]="donut.name" />
      <p class="donut-card-name">
        {{ donut.name | titlecase }}
      </p>
      <p class="donut-card-price">
        {{ donut.price | currency: 'USD':true }}
      </p>
    </a>
  `,
  styles: [
    `
      :host {
        display: block;
        border: 1px solid #ef9fc7;
        border-radius: 8px;
        margin: 8px;
      }
      .donut-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f7f7f7;
        border-radius: 8px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
        padding: 25px;
        margin: 25px;
        border: 2px solid #ef9fc7;
        transition: transform 0.2s ease-in-out;
        &:hover {
          transform: scale(1.05);
        }
        &-promo {
          border: 4px solid #ef9fc7;
        }
        &-border {
          border: 2px solid #ef9fc7;
        }
        &-name {
          font-size: 1.5rem;
          margin: 0;
        }
        &-price {
          font-size: 1.25rem;
          margin: 0;
        }
        &-icon {
          width: 100px;
          height: 100px;
        }
      }
    `,
  ],
})
export class DonutCardComponent {
  @Input() donut!: Donut;
  constructor() {}
}
