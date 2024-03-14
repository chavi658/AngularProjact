import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { SmallRecipeComponent } from './components/small-recipe/small-recipe.component';



@NgModule({
  declarations: [AllRecipesComponent,SmallRecipeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RecipeModule { }
