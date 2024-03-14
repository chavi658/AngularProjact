import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }
  public getRecipes():Observable<Recipe[]>{
    return this.http.get<Recipe[]>('https://localhost:7108/api/Recipe')
  }
}
