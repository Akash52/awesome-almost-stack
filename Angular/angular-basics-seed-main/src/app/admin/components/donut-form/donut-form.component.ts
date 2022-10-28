import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-donut-form',
  template: `
    <form class="donut-form" (ngSubmit)="handleSubmit(form)" #form="ngForm">
      <label>
        <span> Name </span>
        <input
          type="text"
          name="name"
          class="input"
          required
          minlength="3"
          ngModel
          [ngModelOptions]="{ updateOn: 'blur' }"
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
        <ng-container *ngIf="icon.invalid && icon.touched">
          <div class="donut-form-error" *ngIf="icon.errors?.required">
            Icon is required
          </div>
        </ng-container>
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
        <ng-container *ngIf="price.invalid && price.touched">
          <div class="donut-form-error" *ngIf="price.errors?.required">
            Price is required
          </div>
        </ng-container>
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
        <ng-container *ngIf="promo.invalid && promo.touched">
          <div class="donut-form-error" *ngIf="promo.errors?.required">
            Promo is required
          </div>
        </ng-container>
      </div>
      <label>
        <textarea
          name="description"
          class="input input--textarea"
          required
          ngModel
          #description="ngModel"
        ></textarea>

        <ng-container *ngIf="description.invalid && description.touched">
          <div class="donut-form-error" *ngIf="description.errors?.required">
            Description is required
          </div>
        </ng-container>
      </label>
      <button type="submit" class="btn btn--green">Create</button>
      <button
        type="button"
        class="btn btn--grey"
        (click)="
          form.resetForm({
            name: '',
            icon: '🍩',
            price: 0,
            promo: 'undefined',
            description: ''
          })
        "
      >
        Reset Form
      </button>
      <div class="donut-form-workig" *ngIf="form.valid && form.submitted">
        <div class="donut-form-working-spinner"></div>
      </div>
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
        &-working {
          display: none;
          &-spinner {
            margin-top: 16px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 2px solid #ccc;
            border-top-color: #444;
            animation: spin 0.6s linear infinite;

            @keyframes spin {
              to {
                transform: rotate(360deg);
              }
              from {
                transform: rotate(0deg);
              }
              50% {
                transform: rotate(180deg);
              }

              75% {
                transform: rotate(270deg);
                border-top-color: #ccc;
                border-right-color: #444;
                border-bottom-color: #ccc;
                border-left-color: #ccc;
                animation-timing-function: ease-in;
                animation-duration: 0.2s;
                animation-delay: 0.2s;
                animation-iteration-count: 1;
                animation-fill-mode: forwards;
                animation-direction: normal;
              }

              100% {
                transform: rotate(360deg);
                border-top-color: #ccc;
                border-right-color: #ccc;
                border-bottom-color: #ccc;
                border-left-color: #444;
                animation-timing-function: ease-out;
                animation-duration: 0.2s;
                animation-delay: 0.2s;
                animation-iteration-count: 1;
                animation-fill-mode: forwards;
                animation-direction: normal;
              }
            }
          }
        }
      }
    `,
  ],
})
export class DonutFormComponent {
  constructor() {}

  handleSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    } else {
      form.form.markAllAsTouched();
    }
  }

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
