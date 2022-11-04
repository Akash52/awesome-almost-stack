import { Component, OnInit } from '@angular/core';
import { Donut } from './../../models/donut.model';
import { DonutService } from './../../services/donut.service';

@Component({
  selector: 'app-donut-single',
  template: `
    <div>
      <app-donut-form [donut]="donut" (create)="onCreate($event)">
      </app-donut-form>
    </div>
  `,
  styles: [],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;
  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    const id = 'y8z0As';
    this.donut = this.donutService.donuts.find(
      (donut: Donut) => donut.id === id
    ) || {
      name: '',
      icon: '',
      price: 0,
      description: '',
    };
  }
  onCreate(donut: Donut) {
    console.log('Donut created', donut);
  }
}
