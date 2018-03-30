import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import * as  LS from "nativescript-localstorage";
import { Page } from "ui/page";

import { LoginService } from '../services/login.service';
import { Register } from '../models/register';

@Component({
	selector: 'app-register',
	moduleId: module.id,
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	public register: Register;
	public email;
	public password;
	public passwordConfirmation;
	public name;
	public lastName;
	public identification; 
	public type;
	public phone;



	constructor(
		private _register: LoginService,
		private _router: RouterExtensions,
		private route: ActivatedRoute,
		private page: Page
	) { }


	public onRegister(Email, Password, PasswordConfirmation, Name, LastName, Identification, Type, Phone) {
		console.log(this.passwordConfirmation);
		console.log(this.password);
		console.log(this.identification);
		if (!Email || !Password || !PasswordConfirmation || !Name || !LastName || !Identification || !Type || !Phone) {
			return alert('Por favor completar todos los campos.');
		}
		if ( this.password !== this.passwordConfirmation) {
			return alert("contraseñas no cohinciden")
		}
		console.log(this.email);
		if (this.email.length < 1) {
			return alert("ingrese un email");
		}
		this.register.name = this.name;
		this.register.lastName = this.lastName;
		this.register.phone = this.phone;
		this.register.type = this.type;
		this.register.email = this.email;
		this.register.identification = this.identification;
		this._register.signUpUser(this.register).subscribe(
			response => {
				if (!this.register) {
					alert('error en el servidor');
				} else {
					this.register = response.register;
					LS.setItem('token', response.token);
					LS.setItem('id', response.id);
					console.log(LS.getItem('token'), " ", response.email, "    ", this.register);
					this._router.navigate(['profile'], { clearHistory: true });
				}
			},
			err => {
				if (err.status == 404) {
					return alert("el usuario existe" + "    " + err);
				}
				else if (err.status == 0) {
					return alert("error, no hay conexion" + "    " + err);
				} else if (err.status == 500) {
					return alert("error al crear el usuario        " + err);
				}
				else {
					return alert("error de servidor" + "    " + err);
				}
			}
		);
	}

	ngOnInit() {
		this.page.actionBarHidden = true;
		this.register = new Register("", "", "", "", "", "", "");
	}

}
