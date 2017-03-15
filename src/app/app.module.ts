import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Provider
import { Storage } from '@ionic/storage';
import { AmanahAPI } from '../providers/amanah-api';

// Page
import { LoginPage } from '../pages/login/login';
import { NasabahPage } from '../pages/nasabah/nasabah';
import { DetailNasabahPage } from '../pages/detail-nasabah/detail-nasabah';
import { LogoutPage } from '../pages/logout/logout';

@NgModule({
	declarations: [
		MyApp,
		LoginPage,
		NasabahPage,
		DetailNasabahPage,
		LogoutPage
	],
	imports: [
		IonicModule.forRoot(MyApp),
		BrowserModule,
		FormsModule,
		HttpModule,
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		LoginPage,
		NasabahPage,
		DetailNasabahPage,
		LogoutPage
	],
	providers: [AmanahAPI, Storage, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
