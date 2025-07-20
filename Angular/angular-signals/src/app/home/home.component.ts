import {Component, computed, effect, inject, Injector, signal} from '@angular/core';
import {CoursesService} from "../services/courses.service";
import {Course, sortCoursesBySeqNo} from "../models/course.model";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {CoursesCardListComponent} from "../courses-card-list/courses-card-list.component";
import {MatDialog} from "@angular/material/dialog";
import {MessagesService} from "../messages/messages.service";
import {catchError, from, throwError} from "rxjs";
import {toObservable, toSignal, outputToObservable, outputFromObservable} from "@angular/core/rxjs-interop";

// type Counter = {
//     value: number;
// }

@Component({
    selector: 'home',
    imports: [
        MatTabGroup,
        MatTab,
        CoursesCardListComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

    // counter = signal(10).asReadonly();

    counter = signal(0);

    // counter = signal<Counter>({value: 10});

    values = signal<number[]>([0]);

    tenXCounter = computed(() => this.counter() * 10);

    hunderedXCounter = computed(() => this.tenXCounter() * 10);

    constructor() {
        effect(() => {
            console.log(`The current count is: ${this.counter()}`);
        });
    }

    increment() {
        // this.counter++;
        // this.counter.set(this.counter() + 1);
        this.counter.update(value => value + 1);
        // this.counter.update(value => ({...value, value: value.value + 1}));
    }

    append() {
        // wrong way
        // const values = this.values();
        // const last = values[values.length - 1];
        // values.push(last + 1);

        //Right way
        this.values.update(values => [...values, values[values.length - 1] + 1]);
    }
}
