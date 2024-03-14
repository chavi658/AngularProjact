import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../Models/Course';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent implements OnInit {
@Input()
public course!:Course;
public isSoon!:boolean;
  constructor(private route: ActivatedRoute) {}
ngOnInit(): void {
  // this.course = this.route.snapshot.data["course"];
// if((parseInt (this.course?.startDate.toString().split('-')[1]))==new Date().getDay()+7||(parseInt (this.course?.startDate.toString().split('-')[1]))==new Date().getMonth()+2)
if((parseInt (this.course?.startDate.toString().split('-')[1]))==new Date().getDay()+7)
{ 
  this.isSoon = true;
}
else{
  this.isSoon = false
    console.log(this.isSoon, " issoon");
  }
}
}

// private mapWayOfLearningFromServer(wayOfLearningFromServer: number): TheWayOfLearning {
//   switch (wayOfLearningFromServer) {
//     case 0:
//       this.course.wayOfLearning= TheWayOfLearning.Zoom;
//     case 1:
//       this.course.wayOfLearning= TheWayOfLearning.Frontal;
//     default:
//       this.course.wayOfLearning= wa.Frontal; // ערך ברירת מחדל, במקרה של ערך לא מוכר
//   }
// }




