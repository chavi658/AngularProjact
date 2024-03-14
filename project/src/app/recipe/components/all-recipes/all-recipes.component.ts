import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/Recipe';
import { RecipeService } from '../../services/recipe.service';
@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.scss'
})
export class AllRecipesComponent  implements OnInit{
  public recipes?:Recipe[];
  source$: any;
  
  constructor(private _recipeService:RecipeService) {
  }

  ngOnInit(): void {
    this._recipeService.getRecipes().subscribe({
      next: (res) => {
        this.recipes = res
        console.log(res)
      }
    })
    
  }

}
