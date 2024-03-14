import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LectureLoginComponent } from '../lecture-login/lecture-login.component';
import { courseRoutingModule } from './course-routing';
import { AllCoursesComponent } from './Component/all-courses/all-courses.component';
import { CourseDetailsComponent } from './Component/course-details/course-details.component';
import { AddCourseComponent } from './Component/add-course/add-course.component';
import { IconPipePipe } from '../icon-pipe.pipe';
import { HomeComponent } from "../home/home.component";



@NgModule({
    declarations: [AllCoursesComponent, CourseDetailsComponent, AddCourseComponent,],
    exports: [AllCoursesComponent],
    providers: [
        IconPipePipe, // Add your pipe to the providers array if it has dependencies,
        DatePipe
    ],
    imports: [
        CommonModule, courseRoutingModule, FormsModule, ReactiveFormsModule,
        IconPipePipe,
        HomeComponent,
    ]

})
export class CourseModule { }
