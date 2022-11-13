import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Donut } from './../../models/donut.model';
import { DonutService } from './../../services/donut.service';

@Component({
  selector: 'app-donut-single',
  template: `
    <div>
      <app-donut-form
        [donut]="donut"
        [isEdit]="isEdit"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (delete)="onDelete($event)"
      ></app-donut-form>
    </div>
  `,
  styles: [],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;
  isEdit!: boolean;

  constructor(
    private donutService: DonutService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.donutService.readOne(id).subscribe((donut: Donut) => {
      this.donut = donut;
    });
    this.isEdit = this.route.snapshot.data['isEdit'];
  }
  onCreate(donut: Donut) {
    this.donutService
      .create(donut)
      .subscribe((donut) =>
        this.router.navigate(['admin', 'donuts', donut.id])
      );
  }
  onUpdate(donut: Donut) {
    this.donutService.update(donut).subscribe({
      next: () => this.router.navigate(['admin']),
      error: (err) => console.log(err),
    });
  }
  onDelete(donut: Donut) {
    this.donutService
      .delete(donut)
      .subscribe(() => this.router.navigate(['admin']));
  }
}
