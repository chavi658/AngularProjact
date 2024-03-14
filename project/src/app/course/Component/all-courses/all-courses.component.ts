// import { Component, Input, OnInit } from '@angular/core';
// import { Course } from '../../Models/Course';
// import { CourseService } from '../../course.service';
// import { error } from 'console';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-all-courses',
//   templateUrl: './all-courses.component.html',
//   styleUrl: './all-courses.component.scss'
// })
// export class AllCoursesComponent implements OnInit {
//   public courseList!: Course[];
//   public selectedCourse!: Course;

//   constructor(private _courseService: CourseService, private router: Router) {}

//   ngOnInit(): void {
//     this._courseService.getCoursesFromServer().subscribe({
//       next: (res) => {
//         console.log(res);
//         this.courseList = res;
//         console.log("list", this.courseList);
//       },
//       error: (err) => {
//         console.log(err);
//       },
//     });
//   }

//   public showDetails(c: Course) {
//     this.selectedCourse = c;
//   }

//   public addCourse() {
//     this.router.navigate(['/addCourse']);
//   }

//   // פונקציה לעריכת הקורס - שולחת את הנתונים של הקורס לקומפוננטת התת
//   public editCourse(c: Course) {
//     this.router.navigate(['/addCourse'], { state: { course: c } });
//   }
// }
//נסיון ב


import { Component, OnInit } from '@angular/core';
import { Course } from '../../Models/Course';
import { CourseService } from '../../course.service';
import { Router } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';
@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {
  public courseList!: Course[];
  public filteredCourseList!: Course[];
  public selectedCourse!: Course;
  public searchByName: string = '';
  public selectedCategory: string = '';
  public selectedWayOfLearning: string = '';
  public categories: string[] = ['BACKEND', 'FRONTEND']; // דוגמה לרשימת קטגוריות

  constructor(private _courseService: CourseService, private router: Router) {}

  ngOnInit(): void {

    this._courseService.getCoursesFromServer().subscribe({
      next: (res) => {
        this.courseList = res;
        this.filteredCourseList = this.courseList;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  public showDetails(c: Course) {
    this.selectedCourse = c;
  }

  public addCourse() {
    this.router.navigate(['/allCourses/addCourse']);
  }

  public editCourse(c: Course) {
    this.router.navigate(['/allCourses/addCourse'], { state: { course: c } });
  }

 public Islec(course:Course):boolean{
  const l=sessionStorage.getItem("user")
  if (l !== null && l !== undefined && typeof l === 'string') {
    let v = JSON.parse(l);
   
    if (course?.lecturerId ==v.id) {

      console.log("pppppppppppp"+course?.lecturerId )
      console.log(v.id)
      return true
    }
  
  } 
  return false
}
  
  public IsUser(){
    const u=  sessionStorage.getItem("user")
if( u)
return true
return false

  }
  // public applyFilter() {
  //   // נמיר את האופן לימוד למספר
  //   let wayOfLearningNumber: number | undefined;
  //   if (this.selectedWayOfLearning === 'ZOOM') {
  //     wayOfLearningNumber = 1;
  //   } else if (this.selectedWayOfLearning === 'FRONTAL') {
  //     wayOfLearningNumber = 0;
  //   }
  
  //   this.filteredCourseList = this.courseList.filter(course => {
  //     let nameMatches = course.courseName.toLowerCase().includes(this.searchByName.toLowerCase());
  //     let categoryMatches = !this.selectedCategory || course.categoryId === this.selectedCategory;
  //     // נשווה לפי מספר, לאחר ההמרה
  //     let wayOfLearningMatches = !wayOfLearningNumber || course.wayOfLearning === wayOfLearningNumber;
  //     return nameMatches && categoryMatches && wayOfLearningMatches;
  //   });
  // }
  
  public applyFilter() {
    // נמיר את האופן לימוד למספר
    let wayOfLearningNumber: number | undefined;
    if (this.selectedWayOfLearning === 'ZOOM') {
      wayOfLearningNumber = 1;
    } else if (this.selectedWayOfLearning === 'FRONTAL') {
      wayOfLearningNumber = 0;
    }
  
    this.filteredCourseList = this.courseList.filter(course => {
      // נקרוא ל-toLowerCase רק אם המחרוזת אינה מצוייה כ-"undefined"
      let nameMatches = !this.searchByName || course.coursName.toLowerCase().includes(this.searchByName.toLowerCase());
    
      // נוודא שהערך של categoryId אינו מצויין כ-"undefined" לפני השוואה
      let categoryMatches = !this.selectedCategory || !course.categoryId || course.categoryId === this.selectedCategory;
  
      // נוודא שהערך של wayOfLearning נמצא בין האפשרויות החוקיות לפני השוואה
      let wayOfLearningMatches = !this.selectedWayOfLearning || course.wayOfLearning === wayOfLearningNumber;
  
      return nameMatches && categoryMatches && wayOfLearningMatches;
    });
  }
  
}
//not
// }import { Component, OnInit } from '@angular/core';
//finel
// import { Course } from '../../Models/Course';
// import { CourseService } from '../../course.service';
// import { Router } from '@angular/router';
// import { AutoCompleteModule } from 'primeng/autocomplete';
// import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
// import { Component, OnInit } from '@angular/core';

// interface CourseAutocomplete {
//   courseName: string;
//   // הוסף שדות חיפוש רלוונטיים אחרים (לדוגמה, categoryId)
// }

// @Component({
//     selector: 'app-all-courses',
//     templateUrl: './all-courses.component.html',
//     styleUrl: './all-courses.component.scss'
//   })
// export class AllCoursesComponent implements OnInit {
//   public courseList!: Course[];
//   public filteredCourseList!: CourseAutocomplete[];
//   public selectedCourse!: Course;
//   public searchByName: string = '';
//   public selectedCategory: string = '';
//   public selectedWayOfLearning: string = '';
//   public categories: string[] = ['קטגוריה 1', 'קטגוריה 2', 'קטגוריה 3']; // דוגמה לרשימת קטגוריות

//   public formGroup: FormGroup = new FormGroup({
//     selectedCountry: new FormControl<object | null>(null)
//   });

//   constructor(private _courseService: CourseService, private router: Router) {}

//   ngOnInit(): void {
//     this._courseService.getCoursesFromServer().subscribe({
//       next: (res) => {
//         this.courseList = res;
//         this.filteredCourseList = res.map(course => ({ courseName: course.coursName }));
//       },
//       error: (err) => {
//         console.log(err);
//       }
//     });
//   }

//   public showDetails(c: Course) {
//     this.selectedCourse = c;
//   }

//   public addCourse() {
//     this.router.navigate(['/allCourses/addCourse']);
//   }

//   public editCourse(c: Course) {
//     this.router.navigate(['/allCourses/addCourse'], { state: { course: c } });
//   }

//   public filterCourses(event: any) {
//     let query: string = event.query;
//     let filtered: CourseAutocomplete[] = [];
//     for (let course of this.courseList) {
//       if (course.coursName.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
//         filtered.push({ courseName: course.coursName });
//       }
//     }
//     this.filteredCourseList = filtered;
//   }
// }
