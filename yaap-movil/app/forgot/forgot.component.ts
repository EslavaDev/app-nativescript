import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import * as  LS from "nativescript-localstorage";
import { Page } from "ui/page";

import { LoginService } from '../services/login.service';
import { Login } from '../models/login';

import { generate } from '../utils/generate';

@Component({
  selector: 'app-forgot',
  moduleId: module.id,
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  public email: string;
	public password: string;
	public login: Login;

	constructor(
		private _loginService: LoginService,
		private router: RouterExtensions,
		private route: ActivatedRoute,
		private page: Page 
	) { }

	onForgot(emailForm: string) {
		if (!emailForm) {
			return alert('Por favor completar todos los campos.');
		}else{
			this.login.password = this.password;
			this._loginService.Forgot(this.login).subscribe(
				res => {
					if (!this.login) {
						return alert('Error al enviar el email.');
					} else {
            this.login = res.login;
            LS.removeItem('token');
            LS.removeItem('status11');
            LS.removeItem('status1');
            LS.removeItem('status');
            LS.removeItem('id');
            LS.clear();
            
						return alert('Tu nueva contraseña llegara en breve instantes en a tu correo.');
						//setTimeout( "" , 50000);
					}
					//{clearHistory : true}
				},
				err => {
					if (err.status == 404) {
						return alert('Email Incorrecto');
					}
					else {
						return alert('Error en el servidor');
					}
				});
    }
  }

	ngOnInit() { //LS.setItem('token', "23");
		console.log(LS.getItem('token'));
		console.log(LS.getItem('id'));
		this.page.actionBarHidden = true;
		this.password = generate.generateP();
		this.login = new Login("", "");
	}
}