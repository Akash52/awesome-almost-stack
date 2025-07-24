import {Component, ElementRef, inject, signal, viewChild} from '@angular/core';
import {LessonsService} from "../services/lessons.service";
import {Lesson} from "../models/lesson.model";
import {LessonDetailComponent} from "./lesson-detail/lesson-detail.component";

@Component({
    selector: 'lessons',
    imports: [
        LessonDetailComponent
    ],
    templateUrl: './lessons.component.html',
    styleUrl: './lessons.component.scss'
})
export class LessonsComponent {


    mode = signal<'master' | 'detail'>('master');


    lessons = signal<Lesson[]>([]);


    selectedLesson = signal<Lesson | null>(null);


    lessonsService = inject(LessonsService);

    searchInput = viewChild.required<ElementRef>('searchInput');


   async onSearch(){
      const query = this.searchInput()?.nativeElement.value;
      console.log('Searching for lessons with query:', query);
    //   this.lessons.set(this.lessonsService.searchLessons(query));

    const results  = await 
    this.lessonsService.getLessons({
        query: query
    });

    this.lessons.set(results);
      console.log('Search results:', results);
}


onSelectLesson(lesson: Lesson) {
    this.mode.set('detail');
    this.selectedLesson.set(lesson);
}

onLessonUpdated(lesson: Lesson) {
   this.lessons.update(lessons => {
        const index = lessons.findIndex(l => l.id === lesson.id);
        if (index !== -1) {
            lessons[index] = lesson;
        }
        return [...lessons];
    }
    );
    this.mode.set('master');
}
}
