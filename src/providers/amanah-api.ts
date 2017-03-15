import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the AmanahApi provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AmanahAPI {

	// set URL for API
	// private BASE_URL = 'http://10.123.234.5:3000/api/nasabah/';  // URL to web api
	// private BASE_URL = 'https://api.nutritionix.com/v1_1/search/';  // URL to web api
	// private APP_ID = '8abbcd8e';
	// private API_KEY = '36e8d264537037ee7e832a41902ffe57';
	token;
	constructor(private http: Http, public storage: Storage) {
		this.storage.get('token').then((val) => {
			this.token = val;
		});
	}

	login(username, password) {

		let url = 'http://10.123.234.5:3000/authenticate';
		//let params: URLSearchParams = new URLSearchParams();

		let httpGet = this.http.post(url, {NIPPEG : username, PASSWD : password});

		return httpGet.map(res => res.json());
	}

	logout()
	{
		this.storage.remove('token');
	}

	getSearchResults(_searchString) {
		// console.log(this.token);
		let BASE_URL = 'http://10.123.234.5:3000/api/nasabah/';
		//set the parameters for the http request, these will be
		//added to the query string
		let params: URLSearchParams = new URLSearchParams();
		params.set('token', this.token);
		// params.set('appKey', this.API_KEY);
		// params.set('fields', fields);
		let url = BASE_URL + _searchString; /*+'?token=' + this.token;*/
		let sendHttpGet = this.http.get(url, {search : params});
		return sendHttpGet.map(res => res.json());
		// construct the URL, adding the search term to the url
	}
}
