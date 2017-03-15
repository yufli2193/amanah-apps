import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AmanahAPI } from '../../providers/amanah-api';

/*
  Generated class for the Logout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-logout',
	templateUrl: 'logout.html'
})
export class LogoutPage {

	constructor(private navCtrl: NavController, private navParams: NavParams, private amanahAPI: AmanahAPI) {}

	ionViewDidLoad() {
		this.amanahAPI.logout();
		this.navCtrl.setRoot(LoginPage);
	}
}
