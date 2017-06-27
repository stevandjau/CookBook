import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector:'recipe',
  template:`
  <div class="col-md-8 col-md-offset-2 recipedisplay">
    <div class="col-md-6 recipe" *ngFor="let item of recipes">
      <h3>{{item.name}}</h3>
      <p>Added by {{item.username}}</p>
      <h4>Materials:</h4>
      <ul *ngFor="let mat of item.materials ">
        <li>{{mat.qty}} of {{mat.name}}</li>
      </ul>
    </div>
  </div>
  `,
  styleUrls:['./recipe-display.component.css']

})

export class RecipeDisplay implements OnInit {
  recipes : Recipe[];

  constructor(private recipeService:RecipeService){}

  ngOnInit() {
    this.recipeService.getRecipe()
    .subscribe(
      (recipes:Recipe[]) => {
        console.log(recipes);
        this.recipes= recipes
      },
      error => console.error(error)
    );
  }

  update() {
    this.ngOnInit();
  }
}
