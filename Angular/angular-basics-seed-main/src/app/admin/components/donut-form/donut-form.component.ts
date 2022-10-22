import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donut-form',
  template: `
    <form class="donut-form" #form="ngForm">
      <label>
        <span> Name </span>
        <input type="text" name="name" class="input" ngModel />
      </label>

      <label>
        <span> Icon </span>
        <select name="icon" class="input input--select" ngModel>
          <option *ngFor="let icon of icons" [value]="icon">
            {{ icon }}
          </option>
        </select>
      </label>

      <label>
        <span> Price </span>
        <input type="number" name="price" class="input" ngModel />
      </label>
      <div class="donut-form-radios">
        <p class="donut-form-radios-label">Promo :</p>
        <label>
          <input type="radio" name="promo" value="undefined" ngModel />
          <span> None </span>
        </label>
        <label>
          <input type="radio" name="promo" value="new" ngModel />
          <span> Yes </span>
        </label>
        <label>
          <input type="radio" name="promo" value="limited" ngModel />
          <span> No </span>
        </label>
      </div>
      <pre>{{ form.value | json }}</pre>
    </form>
  `,
  styles: [
    `
      .donut-form {
        &-radios {
          display: flex;
          align-content: center;
          &-label {
            margin-right: 8px;
          }
          label {
            display: flex;
            align-items: center;
            span {
              color: #444;
              margin-bottom: 0;
            }
          }
        }
      }
    `,
  ],
})
export class DonutFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  icons: string[] = [
    'caramel-swirl',
    'glazed-fudge',
    'just-chocolate',
    'sour-supreme',
    'strawberry-glaze',
    'vanilla-sundae',
    'zesty-lemon',
  ];
}
