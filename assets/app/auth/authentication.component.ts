import {Component} from '@angular/core';

import {AuthService} from './auth.service';

@Component ({
	selector:'app-authentication',
	template: `
		<header class= 'row-spacing'>
			<nav class="col-md-8 col-md-offset-2">
				<ul class="nav nav-tabs">
					<li routerLinkActive="active"><a [routerLink]="['signup']">Signup</a></li>
					<li routerLinkActive="active" *ngIf="!isLoggedIn()"><a [routerLink]="['signin']">Signin</a></li>
				</ul>
			</nav>
		</header>
		<router-outlet></router-outlet>
	`
})

export class AuthenticationComponent {

	constructor(private authService: AuthService) {}

	isLoggedIn() {
		console.log(this.authService.isLoggedIn());
		return this.authService.isLoggedIn();
	}

}