import { Component, OnInit} from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { RecipeAddForm } from './recipe-addform.module';
import { RecipeDisplay } from './recipe-display.component';

@Component({
  selector: 'app-recipe-list',
  template: `
    <div>
      <recipe-add-form></recipe-add-form>
      <recipe></recipe>
    </div>

  `
})

export class RecipeListComponent {

}
