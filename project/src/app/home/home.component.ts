import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Router, RouterLink } from '@angular/router';
import { BodyComponent } from "../body/body.component";
import Swal from 'sweetalert2';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [LoginComponent, RegisterComponent, BodyComponent,RouterLink]
})


export class HomeComponent {
  constructor(private router:Router) {}

  public toLogin():void{
    this.router.navigate(["/login"])
  }
  public toRegister(){
    this.router.navigate(["/register"])
  }
  public toCourses(){
    this.router.navigate(["/allCourses"])
  }

  public addCourse() {
    this.router.navigate(['/allCourses/addCourse']);
  }
  public logOut(){
    sessionStorage.clear();
    this.router.navigate(["/home"])
    Swal.fire('Success', 'you are log out from the site', 'success');
  }
}
