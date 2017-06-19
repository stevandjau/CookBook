import { Component, OnInit} from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { RecipeAddForm } from './recipe-addform.module';

@Component({
  selector: 'app-recipe-list',
  template: `<div>
      <recipe-add-form></recipe-add-form>
    </div>
      <!--<div *ngFor= let item as recipes )>
          {{item.content}}
      </div>-->
  `
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor (private recipeService:RecipeService){}

  ngOnInit() {
    this.recipeService.getRecipe()
      .subscribe(
        (recipes:Recipe[])=> {
          this.recipes = recipes
        }
      )
  }
}
