import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from './../../services/donut.service';

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <ng-container *ngIf="donuts?.length; then cards; else noDonuts">
      </ng-container>
      <ng-template #cards>
        <app-donut-card
          *ngFor="let donut of donuts; trackBy: trackById"
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
  donuts: Donut[] = [];

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.donutService.read().subscribe((donuts: Donut[]) => {
      this.donuts = donuts;
    });
  }
  trackById(index: number, donut: Donut) {
    return donut.id;
  }
}
