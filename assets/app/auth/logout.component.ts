import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from './auth.service';

@Component ({
	selector: 'app-logout',
	template: `
		<a style="padding-top: 15px;padding-bottom: 15px;" (click)="onLogout()">Logout</a>
	`
})

export class LogoutComponent {
	constructor (private authService: AuthService, private router: Router) {}

	onLogout() {
		this.authService.logout();
		this.router.navigateByUrl('/');
	}
}
