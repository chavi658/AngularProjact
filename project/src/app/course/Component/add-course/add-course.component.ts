import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CourseService } from '../../course.service';

import  moment from 'moment';
import { Course } from '../../Models/Course';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  public courseForm!: FormGroup;
  public categories: string[] = ['BACKEND', 'FRONTEND'];
  constructor(private route: ActivatedRoute,private _courseService:CourseService,private router:Router) { }

  ngOnInit(): void {
    // בקריאה לקומפוננטת התת, בודקים אם ישנם נתונים שהועברו מהקומפוננטה האב
    const course:Course = history.state.course;

    // יצירת הטופס
    this.courseForm = new FormGroup({
      // courseId: new FormControl('', Validators.required),
      coursName: new FormControl('', Validators.required),
      categoryId: new FormControl(course?.categoryId,[ Validators.required]),
      numberOfSessions: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      courseSyllabus: new FormArray([new FormControl('', [Validators.required])]),
      wayOfLearning: new FormControl('', Validators.required),
      lecturerId: new FormControl(''),      image: new FormControl('')
    });
 
    if (course) {
      const formattedDate = moment(course.startDate).format('YYYY-MM-DD');
        console.log("edit")
      // אם ישנם נתונים, נמלא את הטופס בנתוני הקורס המועברים
      this.courseForm.patchValue({
        courseId: course.coursId,
        coursName: course.coursName,
        categoryId: course.categoryId
        ,
        numberOfSessions: course.numberOfSessions,
        startDate: formattedDate
        ,
        wayOfLearning: course.wayOfLearning,
        lecturerId: course.lecturerId,
        image: course.image,
      });
      const silibusFormArray = this.courseForm.get('courseSyllabus') as FormArray;
      silibusFormArray.removeAt(0);
      course.courseSyllabus.forEach((silibusItem) => {
        silibusFormArray.push(new FormControl(silibusItem, [Validators.required]));
        
      });
     
    }
   else{ console.log("add")
   }} 
  get courseSyllabus() {
    return this.courseForm.get('courseSyllabus') as FormArray;
  }
  onSave(): void {
    if (this.courseForm.valid) {
      // אם הטופס תקין, נבצע פעולת POST או PUT כתלות באם ישנם נתונים בטופס או לא
      if (history.state.course) {
        
        Swal.fire('Success', 'The course has been edited successfully', 'success');
        // כאן נבצע קריאת PUT לשמירת הקורס המעודכן
        this._courseService.editCourse(this.courseForm.value.courseId,this.courseForm.value);
      }
       else {
        this._courseService.saveCourse({coursId:"newCourse",coursName:this.courseForm.value.coursName,numberOfSessions:this.courseForm.value.numberOfSessions,categoryId:this.courseForm.value.categoryId,courseSyllabus:this.courseForm.value.courseSyllabus,lecturerId:this.courseForm.value.lecturerId,startDate:this.courseForm.value.startDate,wayOfLearning:0,image:this.courseForm.value.image}) .subscribe({
          next: (res) => {
          },
          error: (err) => {
            console.log(err);
          },
        });;
        console.log(this.courseForm.value)
        Swal.fire('Success', 'The course has been added successfully', 'success');
        // כאן נבצע קריאת POST ליצירת הקורס החדש
        
      }
    }
  }
  // updateFormValues() {
  //   const silibusFormArray = this.courseForm.get('syllabus') as FormArray;
  //   silibusFormArray.removeAt(0);
  //   this.course?.syllabus?.forEach((silibusItem) => {
  //     silibusFormArray.push(new FormControl(silibusItem, [Validators.required]));
  //   });
   
  // }

  addCourseSyllabusInput(): void {
    (this.courseForm.get('courseSyllabus') as FormArray).push(new FormControl(''));
  }

  removeCourseSyllabusInput(index: number): void {
    (this.courseForm.get('courseSyllabus') as FormArray).removeAt(index);
  }
  cancelEdit(): void {
    this.router.navigate(['/allCourses']);
  }
  

}


