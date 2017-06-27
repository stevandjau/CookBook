import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from "./auth.service";
import {User} from "./user.model";

@Component ({
	selector: 'app-signup',
	templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {
	myForm:FormGroup;

	constructor(private authService: AuthService, private router: Router) {}

	onSubmit() {
		const user = new User(
						this.myForm.value.email,
						this.myForm.value.password,
						this.myForm.value.firstName,
						this.myForm.value.lastName
						);
						console.log(user);
		this.authService.signup(user)
			.subscribe(
				data => {
					localStorage.setItem('token', data.token);
					localStorage.setItem('userId', data.userId);
					this.router.navigateByUrl('/');
				},
				error => console.error(error)
			);
		this.myForm.reset();
	}

	ngOnInit() {
		this.myForm = new FormGroup({
			firstName: new FormControl(null, Validators.required),
			lastName: new FormControl(null, Validators.required),
			email: new FormControl(null, [
				Validators.required
				]),
			password: new FormControl(null, Validators.required)
		});
	}
}
