import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Lesson } from "../models/lesson.model";
import { inject } from "@angular/core";
import { LessonsService } from "../services/lessons.service";


export const courseLessonResolver: ResolveFn<Lesson[]> = async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const courseId = route.paramMap.get('id');
    if (!courseId) {
        return [];
    }

    const lessonsService = inject(LessonsService);
    return lessonsService.getLessons({ courseId });
}
