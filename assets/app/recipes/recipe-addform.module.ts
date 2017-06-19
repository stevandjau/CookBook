import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

import { Recipe } from './recipe.model';
import { Material } from '../materials/material.model';
import { RecipeService } from './recipe.service';
import { MaterialAddForm } from '../materials/material-addform.component';

@Component({
  selector:'recipe-add-form',
  templateUrl: './recipe-addform.component.html'
})

export class RecipeAddForm implements OnInit {
  //creating a form
  recipeForm:FormGroup;

  //initiating service
  constructor(private recipeService:RecipeService, private _fb: FormBuilder ){}

  onSubmit() {
    const recipe= new Recipe(
      this.recipeForm.value.recipeName,
      this.recipeForm.value.userName
    );

    var mats:Material[] = [];

    //create array of materials object
    for (var i = 0;i < this.recipeForm.value.materials.length; i++) {
      const mat = new Material(this.recipeForm.value.materials[i].name,this.recipeForm.value.materials[i].qty);
      mats.push(mat);
    }

    console.log(mats);
    this.recipeService.addRecipe(recipe, mats)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    this.recipeForm.reset();
  }

  ngOnInit() {
    this.recipeForm = new FormGroup({
      recipeName: new FormControl(null, Validators.required),
      userName: new FormControl(null, Validators.required),
      materials: this._fb.array([this.initMaterials()])
    })
  }

  initMaterials() {
    return this._fb.group({
      name:['', Validators.required],
      qty:['', Validators.required]
    })
  }

  addMaterial() {
    const control = <FormArray>this.recipeForm.controls['materials'];
    control.push(this.initMaterials());
    console.log(this.recipeForm);
  }

  removeMaterial(i:number) {
    const control = <FormArray>this.recipeForm.controls['materials'];
    control.removeAt(i);
  }
}
