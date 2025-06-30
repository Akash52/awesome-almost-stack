import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HabitDetailComponent } from './habit-detail.component';

const routes: Routes = [
  { path: '', component: HabitDetailComponent }
];

@NgModule({
  declarations: [HabitDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class HabitDetailModule {}
