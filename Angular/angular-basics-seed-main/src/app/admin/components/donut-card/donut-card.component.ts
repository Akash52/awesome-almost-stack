import { Component, Input, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-card',
  template: `
    <div class="donut-card">
      <img
        src="/assets/img/{{ donut.icon }}.svg"
        [alt]="donut.name"
        class="donut-card-icon"
      />
      <p class="donut-card-name">
        {{ donut.name }}
      </p>
      <p class="donut-card-price">
        {{ donut.price | currency: 'USD':true }}
      </p>
    </div>
  `,
  styles: [
    `
      .donut-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f7f7f7;
        border-radius: 8px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
        padding: 25px;
        margin: 25px;
        border: 4px solid #ef9fc7;
        transition: transform 0.2s ease-in-out;
        &:hover {
          transform: scale(1.05);
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
