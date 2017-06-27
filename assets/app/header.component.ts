import {Component, OnInit} from '@angular/core';

@Component ({
	selector: 'app-header',
	template: `
		<link href="https://fonts.googleapis.com/css?family=Libre+Baskerville|Lobster|Roboto" rel="stylesheet">
		<header class="row">
			<div class= "col-md-3">
				<h1>CookBook</h1>
			</div>
			<nav class= "col-md-9">
				<ul class= "nav navbar-nav pull-right">
					<li routerLinkActive="active"><a [routerLink]="['/home']">Home</a></li>
					<li routerLinkActive="active" *ngIf="!isLoggedIn()"><a [routerLink]="['/auth']">Login</a></li>
					<li *ngIf="isLoggedIn()"><app-logout></app-logout></li>
				</ul>
			</nav>
		</header>
	`,
	styles:[`
		h1 {
			font-family: 'Lobster', cursive;
			color:#fd6b8a;
			font-size:4em;
		}

		`]
})

export class HeaderComponent {

	isLoggedIn() {
		return localStorage.getItem('token') !== null;
	}
}
