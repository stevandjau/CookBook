import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector:'recipe',
  template:`
  <div class="row">
    <div class="col-md-10 col-md-offset-1" *ngFor="let item of recipes">
      <p>{{item.name}}</p>
    </div>
  </div>
  `
})

export class RecipeDisplay implements OnInit {
  recipes : Recipe[];

  constructor(private recipeService:RecipeService){}

  ngOnInit() {
    this.recipeService.getRecipe()
    .subscribe(
      (recipes:Recipe[]) => {
        this.recipes= recipes
      },
      error => console.error(error)
    );

  }
}
