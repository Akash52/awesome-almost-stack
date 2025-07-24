import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../models/course.model';
import { Lesson } from '../models/lesson.model';

@Component({
  selector: 'course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent implements OnInit{
  
  private route = inject(ActivatedRoute);
  

  course = signal<Course | null>(null);
  lessons = signal<Lesson[]>([]);
  
  constructor() {
  }

  ngOnInit(): void {
      this.course.set(this.route.snapshot.data['course']);
      this.lessons.set(this.route.snapshot.data['lessons']);
  }
}
