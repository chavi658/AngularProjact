import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './Models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }
  public getCoursesFromServer(): Observable<Course[]> {
    return this.http.get<Course[]>('https://localhost:7108/api/Course')
  }

  public getCoursById(id: string): Observable<Course> {
    return this.http.get<Course>(`https://localhost:7108/api/Course/${id}`)
  }

  public saveCourse(c: Course): Observable<Course> {
   // this.products.push(p)
    return this.http.post<Course>('https://localhost:7108/api/Course',c)
  }
  public editCourse( id:string,c: Course): Observable<any> {
    // this.products.push(p)
     return this.http.put(`https://localhost:7108/api/Course/${id}`,c)
   }
}
