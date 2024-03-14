// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { User } from '../course/Models/User';
// import { Router } from '@angular/router';
// import { UserService } from '../user.service';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-login',
//   standalone:true,
//   imports:[ ReactiveFormsModule,
//     FormsModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.scss'
// })
// export class LoginComponent implements OnInit {
//   public checkUser!: User;
//   public isLecturer!:boolean;
//   public loginForm!: FormGroup;
//   ngOnInit(): void {
//     //לבדוק מאיפה הגיע ןלשנות בהתאם
//     this.loginForm = new FormGroup({
//       'id': new FormControl('id', Validators.required),
//       'password': new FormControl('pass', [Validators.required, Validators.minLength(4)])

//     });
//   }
//   constructor(private router: Router, private _userService: UserService) { }
//   public save(): void {
//     const user: User = this.loginForm.value;
//   console.log(user.id);
//     // // ודא ש-name ו-password קיימים לפני השימוש בהם
//     // const name = user.name || ''; // השתמש בערך ריק אם name אינו מוגדר
//     // const password = user.password || ''; // השתמש בערך ריק אם password אינו מוגדר

//     // if (sessionStorage.getItem(name) !== null) {
//     //   console.log(sessionStorage.getItem(name))
//     //   if (sessionStorage.getItem(password) !== null) {
//     //     // המשתמש קיים והסיסמה נכונה: טפל בהתחברות מוצלחת
//     //     //pass to homepage
//     //   } else {
//     //     // סיסמה שגויה: הצג הודעה מתאימה
//     //     alert("worng password try again");
//     //   }
//     // } else {
//     //    this.router.navigate(['/register'], { queryParams: { user: user }});
//     //   // משתמש לא קיים: נווט לדף רישום עם הפרמטר name
//     //   //this.router.navigate(['/register'], { queryParams: { name } });

//     // }
//     this._userService.getUsertById(user.id!).subscribe({
//       next: (res) => {
//         this.checkUser = res
//       },
//       error: (err) => {
//         console.log(err);
//       }

//     })
//     if (this.checkUser != null) {
//       console.log("user exist");
//       if(this.checkUser.password!=user.password){
//         alert("worg password pleas tru again:(");
//       }
//       const currentUser = {
//         name: this.checkUser.name,
//         id: this.checkUser.id
//       }
//       let userJson = JSON.stringify(currentUser)
//       sessionStorage.setItem("user", userJson)

//     }
//     else {


//       // this.router.navigate(["/register", user.id, user.password]);
//       this.router.navigate(['/register', { id: user.id, password: user.password }]);
//         }


//       // console.log(user.id)
//       // console.log(user.password)
//     }


//   // lectureLogin(){
//   //   const user: User = this.loginForm.value;

//   //   this.router.navigate(["/lecture-login",{ queryParams: { userId: user.id, password: user.password } }])
//   // }
// }
//second
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-login',
//   standalone:true,
//     imports:[ ReactiveFormsModule,
//       FormsModule,],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {
//   public loginForm!: FormGroup;
//   public isLecturer: boolean = false; // תוסיף משתנה לזיהוי אם המשתמש הוא מרצה או לא

//   constructor(private router: Router, private userService: UserService) {}

//   ngOnInit(): void {
//     this.loginForm = new FormGroup({
//       'id': new FormControl('', Validators.required),
//       'password': new FormControl('', [Validators.required, Validators.minLength(4)]),
//       'courseName': new FormControl('', Validators.required) // הוספת שדה קלט חדש לשם הקורס
//     });
//   }

//   public save(): void {
//     const user = this.loginForm.value;
//     // להוסיף טיפול בהתחברות וניתוב בהתאם
//   }

//   // פונקציה שמשנה את הערך של המשתנה isLecturer כשלוחצים על הקישור
//   public toggleIsLecturer(): void {
//     this.isLecturer = true;
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { User } from '../course/Models/User';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,
    FormsModule, RouterLink, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public isLecturer: boolean = false;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'id': new FormControl('', Validators.required),
      'password': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'courseName': new FormControl('')
    });
  }
  public toggleIsLecturer(): void {
    console.log("lecturer");
    this.isLecturer = true;
  }

public isLecturer2(){
  if( this.isLecturer)
{   console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuu")
 return true;
}

return false
}
  public save(): void {
    const user = this.loginForm.value;

    this.userService.getUsertById(user.id).subscribe({
      next: (res) => {
        if (res && res.password) {


          // User exists
          const currentUser = {
            password: res.password,
            id: res.id
          };
          sessionStorage.setItem("user", JSON.stringify(currentUser));
          // Redirect to home page or any other page
          this.router.navigate(['/home']);
        } else {
          // User doesn't exist or error occurred
          alert("Wrong credentials. Please register.");
          // Redirect to registration page with user details
          sessionStorage.setItem("user", JSON.stringify(user));
          this.router.navigate(['/register', { id: user.id, password: user.password }]);
        }
      },
      error: (err) => {
        // Handle error
        console.log(err);
        alert("An error occurred. Please try again later.");
      }
    });
  }

}

