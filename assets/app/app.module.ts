import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent} from "./messages/message-list.component";
import { MessageInputComponent} from "./messages/message-input.component";
import { MessagesComponent } from './messages/messages.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent } from './header.component';
import { Routing } from './app.routing';
import { LogoutComponent } from './auth/logout.component';
import { SignupComponent } from './auth/signup.component';
import { SigninComponent } from './auth/signin.component';
import { AuthService } from './auth/auth.service';
import { RecipeListComponent } from './recipes/recipe-list.module';
import { RecipeService } from './recipes/recipe.service';
import { RecipeAddForm } from './recipes/recipe-addform.module';
import { MaterialAddForm } from './materials/material-addform.component';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        RecipeListComponent,
        RecipeAddForm,
        MaterialAddForm
    ],
    imports: [
        BrowserModule,
        FormsModule,
        Routing,
        ReactiveFormsModule,
        HttpModule],
    providers: [AuthService,RecipeService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
