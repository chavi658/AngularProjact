import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../course/Models/User';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone:true,
  imports:[ ReactiveFormsModule,
    FormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  public userIdFromLogin!:string
  public userPasswordFromLogin!:string

  public userData!:User
  public registerForm!: FormGroup;
  constructor(private route: ActivatedRoute,private readonly _userService:UserService,private router:Router) {
    
  }
 
  // ngOnInit(): void {
  //   this.route.queryParams.subscribe(params => {
  //     this.userIdFromLogin = params['userId'];
  //     this.userPasswordFromLogin = params['password'];
  //     this.initializeForm();
  //   });
    
  //  console.log(this.userIdFromLogin)
  //  console.log(this.userPasswordFromLogin)
   
  // }
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.userIdFromLogin = param['id'];
      this.userPasswordFromLogin=param['password']; 
      console.log(this.userIdFromLogin)
      console.log(this.userPasswordFromLogin)

      this.initializeForm();
  })
  
}

  initializeForm(){
    this.registerForm = new FormGroup({
      'id': new FormControl(this.userIdFromLogin, Validators.required),
      'name': new FormControl('user', [Validators.required, Validators.minLength(2)]),
      'address': new FormControl('address',Validators.required),
      'email':new FormControl('email',[Validators.required,Validators.email]),
      'password':new FormControl(this.userPasswordFromLogin,[Validators.required,Validators.minLength(4)])

    });}
  
  public register() {
    const user: User = this.registerForm.value;
    console.log("register component")

  //   const name = user.name || ''; // השתמש בערך ריק אם name אינו מוגדר
  //   const password = user.password || ''; // השתמש בערך ריק אם password אינו מוגדר
  //   if (sessionStorage.getItem(name) !== null) {
  //     if (sessionStorage.getItem(password) !== null) {
  //       alert("user exist");
  //       //pass to login
  //     }
  //   } else {
  //     sessionStorage.setItem('user', JSON.stringify(user));

  //     //pass to getAllRespe
  //   }
  // }

  this._userService.getUsertById(user.id!).subscribe({
    next: (res) => {
      this.userData = res
    },
    error: (err) => {
      console.log(err);
    }
  })
  if (this.userData != null) {
    alert("user exist");
    this.router.navigate(['/home']);
   

  }
  else {
    this._userService.saveUser(user);
    this.router.navigate(['/allCourses']);
  //   const currentUser = {
  //     name: this.registerForm.value.name,
  //     id: this.registerForm.value.id
  //   }
  //   let userJson = JSON.stringify(currentUser)
  //   sessionStorage.setItem("user", userJson);
  //   this.router.navigate(["/allCourses"])
  }

}

}
