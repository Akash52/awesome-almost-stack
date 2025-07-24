import {Component, effect, ElementRef, inject, input, output, viewChild, viewChildren} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {Course} from "../models/course.model";
import {MatDialog} from "@angular/material/dialog";
import { openEdiCOurseDialog } from '../edit-course-dialog/edit-course-dialog.component';

@Component({
    selector: 'courses-card-list',
    imports: [
        RouterLink
    ],
    templateUrl: './courses-card-list.component.html',
    styleUrl: './courses-card-list.component.scss'
})
export class CoursesCardListComponent {

    courses = input.required<Course[]>()

    courseUpdated = output<Course>()

    courseDeleted = output<string>()

    dialog = inject(MatDialog);
    router = inject(Router);

    // courseCard = viewChild.required<ElementRef>('courseCard');

    courseCard = viewChildren('courseCard')

    constructor() {
        effect(() => {
            console.log('Courses updated:', this.courseCard());
        });
    }

    async editCourse(course: Course) {
    const newCourse =    await openEdiCOurseDialog(
            this.dialog,
            {
                mode: 'update',
                title: 'Edit Course',
                course: course
            }
        )
        this.courseUpdated.emit(newCourse);
        console.log('Course updated:', newCourse);
    }

    deleteCourse(course: Course) {
        this.courseDeleted.emit(course.id);
    }

    debugRoute(course: Course) {
        console.log('Attempting to navigate to course:', course.id);
        console.log('Full course object:', course);
        console.log('Route link would be:', ['/courses', course.id]);
    }

    navigateToCourse(course: Course) {
        console.log('Navigating to course:', course.id);
        console.log('Course ID type:', typeof course.id);
        console.log('Route will be:', `/courses/${course.id}`);
        
        // Ensure the ID is properly converted to string
        const courseId = String(course.id);
        this.router.navigate(['/courses', courseId])
            .then(success => {
                console.log('Navigation successful:', success);
            })
            .catch(error => {
                console.error('Navigation failed:', error);
            });
    }

}
