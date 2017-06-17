import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import {Recipe} from './recipe.model';

@Injectable()
export class AuthService {
	recipes: Recipe[] = [];

	constructor(private http:Http){}

	getRecipe() {
		return http.get('http://localhost:3000/recipe')
			.map((response: Response) => {
				const recipes = response.json().obj;
				let jsonRecipes: Recipe[] = [];
				for (let item in recipes) {
					jsonRecipes.push(new Recipe())
				}
			})
	}
}