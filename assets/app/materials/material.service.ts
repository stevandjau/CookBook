import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import {Material} from './material.model';

@Injectable()
export class RecipeService {
  materials:Material[] = [];

  constructor(private http:Http){}

  addMaterial(material:Material) {
    this.materials.push(material);
    const body = JSON.stringify(material);
    const header = new Headers({'Content-Type':'application/json'});
    const token = localStorage.getItem('token') ? '?token='+localStorage.getItem('token') : '';
		return this.http.post('http://localhost:3000/material/create'+token, body, {headers:header})
			.map((response: Response) => response.json())
			.catch((error:Response) => Observable.throw(error.json()));
	}
}
