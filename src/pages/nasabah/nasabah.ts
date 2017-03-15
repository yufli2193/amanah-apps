import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AmanahAPI } from '../../providers/amanah-api';
import { DetailNasabahPage } from '../detail-nasabah/detail-nasabah';

/*
  Generated class for the Nasabah page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-nasabah',
  templateUrl: 'nasabah.html'
})
export class NasabahPage{
	searchQuery: any = '';
	items: String[];
	token;

	constructor(private navCtrl: NavController, private navParams: NavParams, private amanahAPI: AmanahAPI, public storage: Storage)
	{
		this.storage.get('token').then((val) => {
			this.token = val;
		});
	}

	ionViewDidLoad() {
		//console.log(this.token);
	}

	getItems(ev: any) {
		// clean up the string, if empty then exit
		let val = ev.target.value;

		let q = val.trim()
		if (q == '') {
			this.items = [];
		}
		else{
			this.amanahAPI.getSearchResults(q).subscribe(
				// process the results..
				(data) => {
					//console.log(JSON.stringify(data.data));
					if(data.status === true)
					{
						console.log(data);
						this.items = data.data;
					}
					else
					{
						this.items = [];
					}
					// console.log(data);
					// console.log(this.token);
				},
				  // handle an error condition...
				(err) => alert("Error Searching: " + err),
				  // called when completely done processing
				() => {
					console.log("All Good With The Data");
					//loading.dismiss()
				}
			);
		}
	}

	goToDetails(nama: string, noplat: string, alamat: string)
	{
		this.navCtrl.push(DetailNasabahPage, {nama, noplat, alamat});
	}
}
