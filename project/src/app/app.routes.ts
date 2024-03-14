import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LectureLoginComponent } from './lecture-login/lecture-login.component';
import { AddCourseComponent } from './course/Component/add-course/add-course.component';
import { HeaderComponent } from './header/header.component';

// export const routes: Routes = [
// { path: '', redirectTo: 'login', pathMatch: 'full' },
//     { path: 'login', component: LoginComponent },
//     { path: 'register', component: RegisterComponent },
//     { path: 'lecture-login', component: LectureLoginComponent },
//     { path: '**', component: RegisterComponent }];

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component:HeaderComponent },
    { path: "login", loadComponent: () => import('./login/login.component').then(c => c.LoginComponent) },
    { path: "lecturer-login", loadComponent: () => import('./login/login.component').then(c => c.LoginComponent) },

    { path: 'register', loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent) },
    { path: "allCourses", loadChildren: () => import('./course/course.module').then(c => c.CourseModule) }
    // {path:"addCourse",component:AddCourseComponent}

    // { path: "addCourse", loadChildren: () => import('./course/course.module').then(c => c.CourseModule) },
    // { path: "allCourses/addCourse", loadChildren: () => import('./course/course.module').then(c => c.CourseModule) 

     
      

];
