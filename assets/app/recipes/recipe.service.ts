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
		const body = JSON.stringify({recipe:recipe,material:material});

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
				for (let i = 0; i < recipes.length; i++) {
					jsonRecipes.push(new Recipe(recipes[i].name,recipes[i].user.firstName, recipes[i]._id,recipes[i].imageurl))
				}
				this.recipes = jsonRecipes;
				return jsonRecipes;
			})
	}

}
