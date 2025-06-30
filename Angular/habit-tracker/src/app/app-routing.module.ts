// AppRoutingModule sets up routing for the Angular application.
// Routing allows navigation between different views/components.
//
// RouterModule.forRoot(routes) configures the router at the application's root level.
// 'routes' is an array of route definitions (currently empty).

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitListComponent } from './habit-list/habit-list.component';
import { HabitFormComponent } from './habit-form/habit-form.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'habits', pathMatch: 'full' },
  { path: 'habits', component: HabitListComponent },
  { path: 'add', component: HabitFormComponent},
  { path: 'edit/:id', component: HabitFormComponent },
  { path: 'detail/:id', loadChildren: () => import('./habit-detail/habit-detail.module').then(m => m.HabitDetailModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
