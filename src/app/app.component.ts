import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';

// Pages
import { LoginPage } from '../pages/login/login';
import { NasabahPage } from '../pages/nasabah/nasabah';
// import { DetailNasabahPage } from '../pages/detail-nasabah/detail-nasabah';
import { LogoutPage } from '../pages/logout/logout';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any;
	// rootPage: any = NasabahPage;
	token;

	pages: Array<{title: string, component: any, icon: any}>;

	constructor(public platform: Platform, public storage: Storage) {
		this.storage.get('token').then((val) => {
			if(val)
			{
				this.rootPage = NasabahPage;
				this.initializeApp();
			}
			else{
				this.rootPage = LoginPage;
				this.initializeApp();
			}

			this.pages = [
				{ title: 'Nasabah', component: NasabahPage, icon : "contacts" },
				{ title: 'Logout', component: LogoutPage, icon : "power" }
			];
		});
		// this.initializeApp();

		// used for an example of ngFor and navigation
		// this.pages = [
		// 	{ title: 'Nasabah', component: NasabahPage, icon : "contacts" },
		// 	{ title: 'Logout', component: LogoutPage, icon : "power" }
		// ];

	}

	initializeApp() {
	this.platform.ready().then(() => {
		// Okay, so the platform is ready and our plugins are available.
		// Here you can do any higher level native things you might need.
		StatusBar.styleDefault();
		Splashscreen.hide();
	});
	}

	openPage(page) {
	// Reset the content nav to have just this page
	// we wouldn't want the back button to show in this scenario
	this.nav.setRoot(page.component);
	}
}
