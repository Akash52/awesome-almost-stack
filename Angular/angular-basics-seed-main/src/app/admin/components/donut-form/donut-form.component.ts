import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Donut } from './../../models/donut.model';

@Component({
  selector: 'app-donut-form',
  template: `
    <form class="donut-form" #form="ngForm" *ngIf="donut; else loading">
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          class="input"
          required
          minlength="5"
          [ngModel]="donut.name"
          [ngModelOptions]="{ updateOn: 'blur' }"
          #name="ngModel"
        />
        <ng-container *ngIf="name.invalid && name.touched">
          <div class="donut-form-error" *ngIf="name.errors?.minlength">
            Minimum length of a name is 5!
          </div>
          <div class="donut-form-error" *ngIf="name.errors?.required">
            Name is required.
          </div>
        </ng-container>
      </label>
      <label>
        <span>Icon</span>
        <select
          name="icon"
          class="input input--select"
          required
          [ngModel]="donut.icon"
          #icon="ngModel"
        >
          <option *ngFor="let icon of icons" [ngValue]="icon">
            {{ icon }}
          </option>
        </select>
        <ng-container *ngIf="icon.invalid && icon.touched">
          <div class="donut-form-error" *ngIf="icon.errors?.required">
            Icon is required.
          </div>
        </ng-container>
      </label>
      <label>
        <span>Price</span>
        <input
          type="number"
          name="price"
          class="input"
          required
          [ngModel]="donut.price"
          #price="ngModel"
        />
        <ng-container *ngIf="price.invalid && price.touched">
          <div class="donut-form-error" *ngIf="price.errors?.required">
            Price is required.
          </div>
        </ng-container>
      </label>
      <div class="donut-form-radios">
        <p class="donut-form-radios-label">Promo:</p>
        <label>
          <input
            type="radio"
            name="promo"
            [value]="undefined"
            [ngModel]="donut.promo"
          />
          <span>None</span>
        </label>
        <label>
          <input
            type="radio"
            name="promo"
            value="new"
            [ngModel]="donut.promo"
          />
          <span>New</span>
        </label>
        <label>
          <input
            type="radio"
            name="promo"
            value="limited"
            [ngModel]="donut.promo"
          />
          <span>Limited</span>
        </label>
      </div>
      <label>
        <span>Description</span>
        <textarea
          name="description"
          class="input input--textarea"
          required
          [ngModel]="donut.description"
          #description="ngModel"
        ></textarea>
        <ng-container *ngIf="description.invalid && description.touched">
          <div class="donut-form-error" *ngIf="description.errors?.required">
            Description is required.
          </div>
        </ng-container>
      </label>
      <button
        type="button"
        class="btn btn--green"
        (click)="handleCreate(form)"
        *ngIf="!isEdit"
      >
        Create
      </button>
      <button
        type="button"
        class="btn btn--green"
        [disabled]="form.untouched"
        (click)="handleUpdate(form)"
        *ngIf="isEdit"
      >
        Update
      </button>
      <button
        type="button"
        class="btn btn--green"
        (click)="handleDelete(form)"
        *ngIf="isEdit"
      >
        Delete
      </button>
      <button
        type="button"
        class="btn btn--grey"
        (click)="form.resetForm()"
        *ngIf="form.touched || isEdit"
      >
        Reset
      </button>

      <div class="donut-form-workig" *ngIf="form.valid && form.submitted">
        <div class="donut-form-working-spinner"></div>
      </div>
      <!-- <pre>{{ donut | json }}</pre>
      <pre>{{ form.value | json }}</pre> -->
    </form>
    <ng-template #loading> Loading... </ng-template>
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
            margin: 16px auto;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: transparent;
            border: 2px solid #0b0a03;
            border-top-color: #e25b26;
            border-bottom-color: #df5826;
            animation: 1s spin linear infinite;
          }
          @keyframes spin {
            0% {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);

              -webkit-animation-timing-function: linear;
              animation-timing-function: linear;
            }
            50% {
              -webkit-transform: rotate(180deg);
              transform: rotate(180deg);

              -webkit-animation-timing-function: ease;
              animation-timing-function: ease;
            }
            100% {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
        }
      }
    `,
  ],
})
export class DonutFormComponent {
  @Input() donut!: Donut;
  @Input() isEdit = false;
  @Output() create = new EventEmitter<Donut>();
  @Output() update = new EventEmitter<Donut>();
  @Output() delete = new EventEmitter<Donut>();

  constructor() {}

  handleCreate(form: NgForm) {
    if (form.valid) {
      this.create.emit(form.value);
    } else {
      form.form.markAllAsTouched();
    }
  }

  handleUpdate(form: NgForm) {
    if (form.valid) {
      this.update.emit({ id: this.donut.id, ...form.value });
    } else {
      form.form.markAllAsTouched();
    }
  }

  handleDelete(form: NgForm) {
    if (confirm(`Are you sure you want to delete ${this.donut.name}?`)) {
      this.delete.emit({ id: this.donut.id, ...form.value });
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
