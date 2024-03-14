import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './course/Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }
  public getUsersFromServer(): Observable<User[]> {
    return this.http.get<User[]>('https://localhost:7108/api/User')
  }

  public getUsertById(id: string): Observable<User> {
    return this.http.get<User>(`https://localhost:7108/api/User/${id}`)
  }

  public saveUser(p: User): Observable<any> {
    // this.products.push(p)
    return this.http.post('https://localhost:7108/api/User', p)
  }
}
