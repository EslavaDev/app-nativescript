import { NgModule, NO_ERRORS_SCHEMA ,  } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { CommonModule } from "@angular/common";
import {NativeScriptHttpModule} from "nativescript-angular/http";

import { AppRoutingModule } from "./app.routing";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { LoginService } from './services/login.service';

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    ForgotComponent
],
  bootstrap: [AppComponent],
  imports: [ 
    NativeScriptModule,
    CommonModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
  ],
  providers: [
    LoginService,
],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
