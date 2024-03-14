import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/Recipe';

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrl: './small-recipe.component.scss'
})
export class SmallRecipeComponent {
@Input()
recipe!:Recipe;

constructor() {
}

}
