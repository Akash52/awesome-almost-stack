import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { PizzasService } from "../../services/pizzas.service";
import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import { Observable } from "rxjs/Observable";
import { Pizza } from "../../models/pizza.model";

@Component({
  selector: "products",
  styleUrls: ["products.component.scss"],
  template: `
    <div class="products">
      <div class="products__new">
        <a class="btn btn__ok" routerLink="./new"> New Pizza </a>
      </div>
      <div class="products__list">
        <div *ngIf="(pizzas$ | async)?.length === 0">
          No pizzas, add one to get started.
        </div>
        <pizza-item *ngFor="let pizza of pizzas$ | async" [pizza]="pizza">
        </pizza-item>
      </div>
    </div>
  `,
})
export class ProductsComponent implements OnInit {
  pizzas$: Observable<Pizza[]>;

  constructor(
    private pizzaService: PizzasService,
    private store: Store<fromStore.ProductsState>
  ) {}

  ngOnInit() {
    // this.pizzaService.getPizzas().subscribe((pizzas) => {
    //   this.pizzas = pizzas;
    // });
    this.pizzas$ = this.store.select(fromStore.getAllPizzas);
  }
}
