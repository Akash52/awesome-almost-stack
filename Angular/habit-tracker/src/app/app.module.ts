// AppModule is the root Angular module that bootstraps the application.
// Every Angular app has at least one module (the root module).
//
// NgModule Decorator:
// - declarations: Components, directives, and pipes that belong to this module
// - imports: Other modules whose exported classes are needed by component templates
// - providers: Services available to the injector
// - bootstrap: The root component to bootstrap (start) the app
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HabitFormComponent } from './habit-form/habit-form.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HabitListComponent,
    HabitFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
