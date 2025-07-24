import { Component, effect, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { Course } from "../models/course.model";
import { EditCourseDialogData } from "./edit-course-dialog.data.model";
import { CoursesService } from "../services/courses.service";
import { LoadingIndicatorComponent } from "../loading/loading.component";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { CourseCategoryComboboxComponent } from "../course-category-combobox/course-category-combobox.component";
import { CourseCategory } from '../models/course-category.model';

@Component({
  selector: 'edit-course-dialog',
  standalone: true,
  imports: [
    LoadingIndicatorComponent,
    ReactiveFormsModule,
    CourseCategoryComboboxComponent
],
  templateUrl: './edit-course-dialog.component.html',
  styleUrl: './edit-course-dialog.component.scss'
})
export class EditCourseDialogComponent {

  courseService = inject(CoursesService);
  dialogRef = inject(MatDialogRef<EditCourseDialogComponent>);

  data : EditCourseDialogData = inject(MAT_DIALOG_DATA);

  fb = inject(FormBuilder);

  form = this.fb.group({
    title : ['', Validators.required],
    longDescription: ['', Validators.required],
    iconUrl: [''],
  })

  category = signal<string>('BEGINNER');

  constructor(){
    this.form.patchValue({
      title: this.data.course?.title || '',
      longDescription: this.data.course?.longDescription || '',
      iconUrl: this.data.course?.iconUrl || ''
    })

    this.category.set(this.data.course?.category || 'BEGINNER');
    effect(() => {
     console.log('Category changed to:', this.category());
    })
  }

  onClose(){
    this.dialogRef.close();
  }

  async onSave() {
    if (this.form.invalid) {
      console.log('Form is invalid:', this.form.errors);
      alert('Please fill in all required fields');
      return;
    }
    
    const courseProps = this.form.value as Partial<Course>;
    courseProps.category = this.category() as CourseCategory;
    console.log('Saving course with props:', courseProps);
    
    if(this.data.mode === 'update'){
     await this.saveCourse(this.data?.course!.id, courseProps);
    } else if(this.data.mode === 'create'){
    await this.createCourse(courseProps);
    }
  }

  async saveCourse(courseId : string , changes : Partial<Course>){
    try {
      console.log('Updating course with ID:', courseId, 'and changes:', changes);
      const updatedCourse = await this.courseService.saveCourseWithHTTP(courseId, changes);
      console.log('Course updated successfully:', updatedCourse);
      this.dialogRef.close(updatedCourse);
    } catch (error) {
      console.error('Failed to update course:', error);
      // Don't close the dialog on error, let user try again
    }
  }

   async createCourse(course: Partial<Course>) {
    try {
      const newCourse = await this.courseService.createCourse(course);
      this.dialogRef.close(newCourse);
    }
    catch (err) {
      console.error(err);
      alert(`Error creating the course.`)
    }

  }
    

}

export function openEdiCOurseDialog(
  dialog: MatDialog,
  data: EditCourseDialogData,
) {
  const config = new MatDialogConfig();
  config.disableClose = true;
  config.autoFocus = true;
  config.width = '400px';
  config.data = data;

  const close$ = dialog.open(EditCourseDialogComponent, config)
  .afterClosed();
  return firstValueFrom(close$)
}
