import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import {Recipe} from './recipe.model';
import {Material} from '../materials/material.model';

@Injectable()
export class RecipeService {
	recipes: Recipe[] = [];

	constructor(private http:Http){}

	addRecipe(recipe:Recipe, material:Material[]) {
		this.recipes.push(recipe);
		const body = JSON.stringify({recipe:recipe,material:material);

		const header = new Headers({'Content-Type':'application/json'});
		const token = localStorage.getItem('token') ? '?token='+localStorage.getItem('token') : '';
		return this.http.post('http://localhost:3000/recipe/create'+token, body, {headers:header})
			.map((response: Response) => response.json())
			.catch((error:Response) => Observable.throw(error.json()));
	}

	getRecipe() {
		return this.http.get('http://localhost:3000/recipe')
			.map((response: Response) => {
				const recipes = response.json().obj;
				let jsonRecipes: Recipe[] = [];
				for (let item in recipes) {
					jsonRecipes.push(new Recipe(item.name,item.username, item.id,item.imageurl))
				}
				this.recipes = jsonRecipes;
				return jsonRecipes;
			})
	}

}
