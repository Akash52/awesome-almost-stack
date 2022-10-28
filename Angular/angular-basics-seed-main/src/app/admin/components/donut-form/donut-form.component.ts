import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donut-form',
  template: `
    <form class="donut-form" #form="ngForm">
      <label>
        <span> Name </span>
        <input
          type="text"
          name="name"
          class="input"
          required
          minlength="3"
          ngModel
          #name="ngModel"
        />
        <ng-container *ngIf="name.invalid && name.touched">
          <div class="donut-form-error" *ngIf="name.errors?.required">
            Name is required
          </div>
          <div class="donut-form-error" *ngIf="name.errors?.minlength">
            Name must be at least 3 characters
          </div>
        </ng-container>
      </label>

      <label>
        <span> Icon </span>
        <select
          name="icon"
          class="input input--select"
          required
          ngModel
          #icon="ngModel"
        >
          <option *ngFor="let icon of icons" [value]="icon">
            {{ icon }}
          </option>
        </select>
      </label>

      <label>
        <span> Price </span>
        <input
          type="number"
          name="price"
          class="input"
          required
          ngModel
          #price="ngModel"
        />
      </label>
      <div class="donut-form-radios">
        <p class="donut-form-radios-label">Promo :</p>
        <label>
          <input
            type="radio"
            name="promo"
            value="undefined"
            required
            ngModel
            #promo="ngModel"
          />
          <span> None </span>
        </label>
        <label>
          <input
            type="radio"
            name="promo"
            value="new"
            required
            ngModel
            #promo="ngModel"
          />
          <span> Yes </span>
        </label>
        <label>
          <input
            type="radio"
            name="promo"
            value="limited"
            required
            ngModel
            #promo="ngModel"
          />
          <span> No </span>
        </label>
      </div>
      <label>
        <textarea
          name="description"
          class="input input--textarea"
          required
          ngModel
        ></textarea>
      </label>
      <pre>{{ form.value | json }}</pre>
      <pre
        >{{ form.form.status }}
      </pre
      >
    </form>
  `,
  styles: [
    `
      .ng-invalid.ng-touched:not(form) {
        border: 1px solid red;
        background-color: #ffe6e6;
      }
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
        &-error {
          color: #e66262;
          font-size: 12px;
          margin-top: 4px;
          &::before {
            content: '⚠';
            margin-right: 4px;
            font-size: 14px;
            color: #e66262;
            display: inline-block;
            vertical-align: middle;
            transform: translateY(-1px);
            font-weight: bold;
            line-height: 1;
            text-align: center;
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
