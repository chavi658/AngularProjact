import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../course/Models/User';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { HomeComponent } from "../home/home.component";

@Component({
    selector: 'app-lecture-login',
    standalone: true,
    templateUrl: './lecture-login.component.html',
    styleUrl: './lecture-login.component.scss',
    imports: [ReactiveFormsModule,
        FormsModule, HomeComponent]
})
export class LectureLoginComponent  implements OnInit{
  constructor(private route: ActivatedRoute,private _userService:UserService,private router:Router){}
  public userPropertyFromLogin!:User;
  public lectureForm!:FormGroup
   public checkUser!:User
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userPropertyFromLogin = params['user'];
    });
    this.lectureForm = new FormGroup({
      'id': new FormControl("lecturerId", Validators.required),
      'password':new FormControl("lecturerPassword",[Validators.required,Validators.minLength(4)]),
      'coursName':new FormControl("coursName",[Validators.required,Validators.minLength(4)])

    });
  }
  public login(){
    console.log(" lecturer login")
    const user: User = this.lectureForm.value;
    this._userService.getUsertById(user.id!).subscribe({
      next: (res) => {
        this.checkUser = res
      },
      error: (err) => {
        console.log(err);
      }

    })
    if (this.checkUser != null) {
      console.log("user exist");
      const currentUser = {
        name: this.checkUser.name,
        id: this.checkUser.id
      }
      let userJson = JSON.stringify(currentUser)
      sessionStorage.setItem("user", userJson)
    }
    else {
      this.router.navigate(["/course/register", { queryParams: { user } }])
    }

  }
  }
  

