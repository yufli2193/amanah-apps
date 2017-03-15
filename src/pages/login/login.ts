import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AmanahAPI } from '../../providers/amanah-api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NasabahPage } from '../nasabah/nasabah';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage{
	form;
	loading = false;
	returnUrl: string;
	NIPPEG :string;

	constructor(private navCtrl: NavController, private navParams: NavParams, private amanahAPI: AmanahAPI, public storage: Storage)
	{
		this.form = new FormGroup({
			username: new FormControl("", Validators.required),
			password: new FormControl("", Validators.required)
		});
	}

	ionViewDidLoad() {
		this.storage.get('token').then((val) => {
			this.NIPPEG = val;
			if (this.NIPPEG) {
				this.navCtrl.setRoot(NasabahPage);
			}
		});
	}

	login() {
		let username = this.form.value.username;
		let password = this.form.value.password;

		this.amanahAPI.login(username , password).subscribe(
			data => {
				if(data.success === true)
				{
					// var that = this;
					// data.data.map(function(obj)
					// {
					// 	that.storage.set('NIPPEG', obj.NIPPEG);
					// 	that.storage.set('token', obj.token);
					// 	that.storage.set('NMLGKP', obj.NMLGKP);
					// });
					console.log(data);
					this.storage.set('token', data.token);
					this.navCtrl.setRoot(NasabahPage);
				}
				else
				{
					console.log(data);
				}
			},
			error => {
				console.log('Error' + error);

			}
		);
	}
}
