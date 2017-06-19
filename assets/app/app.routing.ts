import {Routes, RouterModule} from '@angular/router';

import {RecipeListComponent} from './recipes/recipe-list.module';
import {AuthenticationComponent} from './auth/authentication.component';
import {AUTH_ROUTES} from "./auth/auth.routes";

const APP_ROUTES: Routes= [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: RecipeListComponent},
	{path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
