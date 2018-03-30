import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';

var excludedComponents = [];

let APP_ROUTES: Routes = [
    {
        path: "", component: LoginComponent
    },
    {
        path: "login", component: LoginComponent
    },
    {
        path: "profile", component: ProfileComponent
    },
    {
        path: "register", component: RegisterComponent
    },
    {
        path: "forgot", component: ForgotComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(APP_ROUTES)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }