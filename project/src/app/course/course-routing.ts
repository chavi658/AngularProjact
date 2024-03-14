import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursesComponent } from './Component/all-courses/all-courses.component';
import { CourseDetailsComponent } from './Component/course-details/course-details.component';
import { AddCourseComponent } from './Component/add-course/add-course.component';
import { lecturerGuard } from '../lecturer.guard';


const courseRoutes: Routes = [
  { path: '', redirectTo: 'all-Courses', pathMatch: 'full' },
  { path: 'all-Courses', component: AllCoursesComponent },
  { path: "course-details/:id", component:CourseDetailsComponent },
  // { path: "edit-course", component:EditCourseComponent },
  // { path: "edit-course", component:AddCourseComponent },
  // { path: "addCourse", component:AddCourseComponent,canActivate: [lecturerGuard], data: { data: { course: null } } }
  { path: "addCourse", component:AddCourseComponent }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(courseRoutes)
  ],
  exports: [RouterModule]
})
export class courseRoutingModule { }
