import {Component, computed, effect, EffectRef, ElementRef, inject, Injector, OnInit, signal, viewChild} from '@angular/core';
import {CoursesService} from "../services/courses.service";
import {Course, sortCoursesBySeqNo} from "../models/course.model";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {CoursesCardListComponent} from "../courses-card-list/courses-card-list.component";
import {MatDialog} from "@angular/material/dialog";
import { MessagesService } from '../messages/messages.service';
import {catchError, from, single, throwError} from "rxjs";
import {toObservable, toSignal, outputToObservable, outputFromObservable} from "@angular/core/rxjs-interop";
import { openEdiCOurseDialog } from '../edit-course-dialog/edit-course-dialog.component';
import { LoadingService } from '../loading/loading.service';

// type Counter = {
//     value: number;
// }

@Component({
    selector: 'home',
    imports: [
        MatTabGroup,
        MatTab,
        CoursesCardListComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

    // counter = signal(10).asReadonly();

    counter = signal(0);

    // counter = signal<Counter>({value: 10});

    values = signal<number[]>([0]);

    tenXCounter = computed(() => this.counter() * 10);

    hunderedXCounter = computed(() => this.tenXCounter() * 10);


    effectRef : EffectRef | null = null;


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

    cleanup() {
        if (this.effectRef) {
            this.effectRef.destroy();
            this.effectRef = null;
        }
    }

    #courses = signal<Course[]>([])

    coursesService = inject(CoursesService)
    // loadingService = inject(LoadingService)
    messagesService = inject(MessagesService)
    dialog = inject(MatDialog)

    beginnnerCourses = computed(() => {
        return this.#courses().filter(course => course.category === 'BEGINNER');
    });

    advancedCourses = computed(() => {
        return this.#courses().filter(course => course.category === 'ADVANCED');
    });

    ngOnInit(): void {
        this.loadCourses()
        .then(() => {
            console.log('Courses loaded successfully', this.#courses());
        })
        .catch(error => {
            console.error('Error loading courses:', error);
        });
    }


    // beginnersList = viewChild<CoursesCardListComponent>('beginnersList');

    // beginnersList = viewChild('beginnersList', {
    //     read: ElementRef
    // });


    beginnersList = viewChild('beginnersList', {
        read: ElementRef<Course[]>
    });

    

    constructor() {
        
        effect(() => {
           console.log('Beginners List:', this.beginnersList());
        });



        this.effectRef = 
        effect(() => {
            // console.log(`The current count is: ${this.counter()}`);
            console.log(`Beginner courses: ${this.beginnnerCourses().length}`);
            console.log(`Advanced courses: ${this.advancedCourses().length}`);
        });
    }

   async loadCourses() {
     try {
    //   this.loadingService.loadingOn();
       const courses = await this.coursesService.loadAllCourses();
       this.#courses.set(courses.sort(sortCoursesBySeqNo));
     }
     catch (error) {
         this.messagesService.showMessage('Error loading courses', 'error');
         console.error(error);
         this.#courses.set([]);
      } 
    //   finally {
    //       this.loadingService.loadingOff();
    //   }
    }


    onCourseUpdated(course : Course) {
        const courses = this.#courses();
        const index = courses.findIndex(c => c.id === course.id);
        if (index !== -1) {
            courses[index] = course;
            this.#courses.set([...courses]);
        }
    }

   async onCourseDeleted(courseId: string) {
        // const courses = this.#courses();
        // const index = courses.findIndex(c => c.id === courseId);
        // if (index !== -1) {
        //     courses.splice(index, 1);
        //     this.#courses.set([...courses]);
        // }

        try {

            await this.coursesService.deleteCourse(courseId)
                const courses = this.#courses();
                const index = courses.findIndex(c => c.id === courseId);
                if (index !== -1) {
                    courses.splice(index, 1);
                    this.#courses.set([...courses]);
                } 
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    }

     async onAddCourse() {
        console.log('Adding new course');
        try {
            const newCourse = await openEdiCOurseDialog(
              this.dialog,
              {
                mode: "create",
                title: "Create New Course"
              }
            );
            
            if (!newCourse) {
              console.log('Dialog was cancelled');
              return;
            }
            
            console.log('New course created:', newCourse);
            const newCourses = [
              ...this.#courses(),
              newCourse
            ];
            this.#courses.set(newCourses);
        } catch (error) {
            console.error('Error creating course:', error);
            alert('Failed to create course. Please try again.');
        }
  }
}

