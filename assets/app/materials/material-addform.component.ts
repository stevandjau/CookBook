import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'material',
  template: `
      <div [formGroup]= "materialForm">
        <div class="form-group col-md-8">
    			<label for="name">Name</label>
    			<input type="text" id="materialName" class=form-control formControlName="name">
    		</div>
    		<div class="form-group col-md-4">
    			<label for="qty">Quantity</label>
    			<input type="text" id="qty" class=form-control formControlName="qty">
    		</div>
      </div>
  `
})

export class MaterialAddForm {
    @Input('group')
    public materialForm: FormGroup;
}
