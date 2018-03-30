import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import * as  LS from "nativescript-localstorage";
import { Page } from "ui/page";

import { LoginService } from '../services/login.service';
import { Login } from '../models/login';

@Component({
	selector: 'login',
	moduleId: module.id,
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	public email: string;
	public password: string;
	public login: Login;

	constructor(
		private _loginService: LoginService,
		private router: RouterExtensions,
		private route: ActivatedRoute,
		private page: Page 
	) { }

	onLogin(emailForm: string, passwordForm: string) {
		if (!emailForm || !passwordForm) {
			return alert('Por favor completar todos los campos.');
		}
		if (LS.getItem('status11') !== null) return alert("tu cuenta ha sido bloqueada");

		this.login.email = this.email;
		this.login.password = this.password;
		console.log(this.login);
		this._loginService.signIn(this.login).subscribe(
			res => {
				if (!this.login) {
					return console.log('Error al iniciar la sesion.');
				} else {
					this.login = res.login;
					if (LS.getItem('status1') !== null) {
						LS.removeItem('status1');
					} else {
						LS.removeItem('status');
					}
					LS.setItem('token', res.token);
					LS.setItem('id', res.id);
					console.log(LS.getItem('token'));
					this.router.navigate(["profile"], { clearHistory: true });
				}
				//{clearHistory : true}
			},
			err => {
				if (err.status == 404) {
					if (LS.getItem('status1') !== null) {

						LS.removeItem('status1');
						LS.setItem('status11', "111");
					} else if (LS.getItem('status') !== null) {
						LS.removeItem('status');
						LS.setItem('status1', "11");
					} else {
						LS.setItem('status', "1");
					}
					return console.log('Email o contraseña Incorrecta');
				}
				else {
					return console.log('Error en el servidor');
				}
			});
	}

	tokens(){
		LS.removeItem('status11');
		LS.removeItem('status1');
		LS.removeItem('status');
		LS.removeItem('token');
		LS.removeItem('id');
		LS.clear();
	}

	ngOnInit() { //LS.setItem('token', "23");
		console.log(LS.getItem('token'));
		console.log(LS.getItem('id'));
		this.page.actionBarHidden = true;
		if (LS.getItem('token')) {
			return this.router.navigate(["/profile"]);
		}
		this.login = new Login("", "");
	}
}