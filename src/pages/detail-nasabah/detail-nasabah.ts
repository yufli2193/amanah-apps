import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DetailNasabah page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-nasabah',
  templateUrl: 'detail-nasabah.html'
})
export class DetailNasabahPage {
	nama;
	alamat;
	noplat;

	constructor(public navCtrl: NavController, public navParams: NavParams)
	{
		this.nama = navParams.get('nama');
		this.alamat = navParams.get('alamat');
		this.noplat = navParams.get('noplat');
	}

	ionViewDidLoad() {
		console.log(this.nama);
	}

}
