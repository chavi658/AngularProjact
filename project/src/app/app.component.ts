import { Component, NgModule, ɵisNgModule } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RecipeModule } from './recipe/recipe.module';
import { CourseModule } from './course/course.module';
import { RegisterComponent } from './register/register.component';
import { LectureLoginComponent } from './lecture-login/lecture-login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { IconPipePipe } from './icon-pipe.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { BodyComponent } from "./body/body.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { DatePipe } from '@angular/common';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [ FormsModule, LoginComponent, RegisterComponent, LectureLoginComponent, HttpClientModule, HttpClientModule, RouterModule, CourseModule, FormsModule, IconPipePipe, BodyComponent, FooterComponent, HomeComponent, HeaderComponent,DatePipe,ReactiveFormsModule]
})
export class AppComponent {
  constructor(private sanitizer: DomSanitizer) {}
  title = 'project';
}
