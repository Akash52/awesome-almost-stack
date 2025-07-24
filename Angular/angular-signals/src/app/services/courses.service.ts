import { inject, Injectable } from "@angular/core";
import { HttpClient, HttpContext } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Course } from "../models/course.model";
import { GetCoursesResponse } from "../models/get-courses.response";
import { environment } from "../../environments/environment.development";
import { SKIP_LOADING } from "../loading/skip-loading.component";


@Injectable({
  providedIn: "root"
})
export class CoursesService {

  http = inject(HttpClient);

  //  async loadAllCourses(): Promise<Course[]> {
  //   const res = await fetch(`${environment.apiRoot}/courses`);
  //   const payload = await res.json();
  //   return payload.courses as Course[];
  //   }

  async loadAllCourses(): Promise<Course[]> {
    const response = this.http.get<GetCoursesResponse>(`${environment.apiRoot}/courses` , {
      context: new HttpContext().set(SKIP_LOADING, true)
    });
    const data = await firstValueFrom(response);
    return data.courses;
  }

  async createCourse(course: Partial<Course>): Promise<Course> {
    const res = await fetch(`${environment.apiRoot}/courses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(course)
    })

    if (!res.ok) {
      throw new Error('Failed to create course');
    }
    const payload = await res.json();
    return payload as Course;
  }

  async createCourseWithHTTP(course: Partial<Course>): Promise<Course> {
    const response = this.http.post<Course>(`${environment.apiRoot}/courses`, course);
    return firstValueFrom(response);
  }

  async saveCourse(courseId: string, course: Partial<Course>): Promise<Course> {
    const res = await fetch(`${environment.apiRoot}/courses/${course.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(course)
    });

    if (!res.ok) {
      throw new Error('Failed to save course');
    }
    const payload = await res.json();
    return payload as Course;
  }


  async saveCourseWithHTTP(courseId: string, course: Partial<Course>): Promise<Course> {
    const response = this.http.put<Course>(`${environment.apiRoot}/courses/${courseId}`, course);
    return firstValueFrom(response);
  }





  async deleteCourse(courseId: string): Promise<void> {
    const res = await fetch(`${environment.apiRoot}/courses/${courseId}`, {
      method: 'DELETE'
    });

    if (!res.ok) {
      throw new Error('Failed to delete course');
    }
  }

  async deleteCourseWithHTTP(courseId: string): Promise<void> {
    const response = this.http.delete<void>(`${environment.apiRoot}/courses/${courseId}`);
    return firstValueFrom(response);
  }

  async getCourseById(courseId: string): Promise<Course | null> {
    const res = await fetch(`${environment.apiRoot}/courses/${courseId}`);
    if (!res.ok) {
      return null;
    }
    const payload = await res.json();
    return payload as Course;
  }

  async getCourseByIdWithHTTP(courseId: string): Promise<Course | null> {
    const response$ = this.http.get<Course>(`${environment.apiRoot}/courses/${courseId}`);
    const course = await firstValueFrom(response$);
    return course || null;
  }
}
