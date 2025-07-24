import {Component, inject, input, output} from '@angular/core';
import {Lesson} from "../../models/lesson.model";
import {ReactiveFormsModule} from "@angular/forms";
import {LessonsService} from "../../services/lessons.service";
import {MessagesService} from "../../messages/messages.service";

@Component({
    selector: 'lesson-detail',
    imports: [
        ReactiveFormsModule
    ],
    templateUrl: './lesson-detail.component.html',
    styleUrl: './lesson-detail.component.scss'
})
export class LessonDetailComponent {

    lesson = input.required<Lesson>();
    lessonUpdated = output<Lesson>();
    cancel = output();

    private lessonsService = inject(LessonsService);

    onCancel() {
        this.cancel.emit();
    }

    onSave() {
        const lesson = this.lesson();
        this.lessonsService.saveLesson(lesson.id, {
            description: lesson.description
        }).then(updatedLesson => {
            this.lessonUpdated.emit(updatedLesson);
            alert('Lesson updated successfully!');
        });
    }



}
