import { Injectable } from '@angular/core';
import { Observable as RxObservable } from "rxjs/Observable";
//import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Http, Headers } from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

import { Login } from '../models/login';
import {Register} from '../models/register';
import {User} from '../models/user';

@Injectable()
export class LoginService {
    public url: string;
    headers = new Headers();
    constructor(private _http: Http) {
        this.url = 'http://31.220.55.37:3800/';
		this.headers.append('Content-Type','application/json');
		this.headers.append('Authorization', "Bearer " + localStorage.getItem("token"));
	}

    signIn(login: Login) {
        let json = JSON.stringify(login);
        let params = json;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        console.log(json + "    " + params);
        return this._http.post(this.url + 'workerSignIn', params, { headers: headers })
            .map((res: any) => res.json());

    }

    signUpUser(register: Register) {
        let json = JSON.stringify(register);
        let params = json;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'workerSignUp/', params, { headers: headers })
            .map(res => res.json());
    }

    Forgot(login: Login) {
        let json = JSON.stringify(login);
        let params = json;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'workers/recuperate', params, { headers: headers })
            .map((res: any) => res.json());

    }

    getUser(id:string){
		console.log(this.headers);
		return this._http.get(this.url+'oneWorker/'+id,{headers:this.headers})
						 .map(res => res.json());
	}
	

	editUser(id: string, user: User){
		let json = JSON.stringify(user);
		let params = json;
		return this._http.put(this.url+'workerUpdate/'+id, params, {headers: this.headers})
						 .map(res => res.json());
	}

	changedPassword(id:string, user){
		console.log(this.headers);
		let json = JSON.stringify(user);
		let params = json;
		return this._http.post(this.url+'changed/'+id,params,{headers:this.headers})
						 .map(res => res.json());
	}

}