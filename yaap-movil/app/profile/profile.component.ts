import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RouterExtensions } from 'nativescript-angular/router';
import * as  LS from "nativescript-localstorage";
import { Page } from "ui/page";

import { LoginService } from '../services/login.service';
import { User } from '../models/user';

@Component({
	selector: 'profile',
	moduleId: module.id,
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

	public favorito: User;
	public errorMessage;
	public date = Date.now();
	public _id: string;
	public NewPassword;
	public Password;
	public ConfirmPassword;
	public email;
	public password;
	public passwordConfirmation;
	public name;
	public lastName;
	public identification; 
	public type;
	public country;
	public direction;
	public phone;
	public status;
	public signUpdate;

	constructor(
		private _UserService: LoginService,
		private _router: RouterExtensions,
		private route: ActivatedRoute,
		private page: Page 
	) { }

	getUser(_id2) {
		this._UserService.getUser(_id2).subscribe(
			response => {
				if (!this.favorito) {
					alert('error en el servidor');
				} else {
					console.log(this.name + this.lastName + response.favorito._id);
					this.favorito = response.favorito;
					this.name = this.favorito.name;
					this.lastName = this.favorito.lastName;
					this.type = this.favorito.type;
					this.country = this.favorito.country;
					this.direction = this.favorito.direction;
					this.phone = this.favorito.phone;
					this.identification = this.favorito.identification;
					this.email = this.favorito.email;
					this.signUpdate = this.favorito.signUpdate
					this.status = this.favorito.status;
					this.status = this.favorito.status;
				}
			},
			err => {
				if (err.status == 403) {
					return alert("no tienes autorizacion" + "    " + err);
				}
				if (err.status == 401) {
					return alert("Token ha expirado" + "    " + err);
				}
				if (err.status == 500) {
					return alert("token invalido" + "    " + err);
				}
				if (err.status == 0) {
					return alert("error no hay conexion" + "    " + err);
				} else {
					return alert("error de peticion");
				}
			}
		);
	}

	ngOnInit() {
		this.favorito = new User("", "", "", "", "", "", "", 0, true, "", this.date, "");
		this._id = LS.getItem('id');
		this.getUser(LS.getItem('id'));
		if (LS.getItem('token') == null) {
			return this._router.navigate(['']);
		}
	 }
}