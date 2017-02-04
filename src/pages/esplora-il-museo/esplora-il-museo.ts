import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, Platform, Events, Alert, ViewController, LoadingController } from 'ionic-angular';

import { IBeacon, LocalNotifications } from 'ionic-native';
// providers
import { BeaconProvider } from '../../providers/beacon-provider';

// models
import { BeaconModel } from '../../models/beacon-module';

import {GiocondaPage} from "../gioconda/gioconda";
import { NgZone } from '@angular/core';

/*
  Generated class for the EsploraIlMuseo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-esplora-il-museo',
  templateUrl: 'esplora-il-museo.html'
})
export class EsploraIlMuseoPage {

	beacons: BeaconModel[] = [];
	zone: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public beaconProvider: BeaconProvider, public events: Events, public platform: Platform) {
  	this.zone = new NgZone({ enableLongStackTrace: false });
  }

  ionViewDidLoad() {
	this.platform.ready().then(() => {
		this.beaconProvider.initialise().then((isInitialised) => {
			if (isInitialised) {
				this.listenToBeaconEvents();
			}
		});
	});
  }

  public launchModal(){
  	this.navCtrl.push(GiocondaPage);

  /*	var searchProjModal = this.modalCtrl.create(GiocondaModal);
		searchProjModal.onDidDismiss(data => {
			
		});
		searchProjModal.present();*/
  }

  listenToBeaconEvents() {
		this.events.subscribe('didRangeBeaconsInRegion', (data) => {

		// update the UI with the beacon list
			this.zone.run(() => {

			this.beacons = [];

			let beaconList = data.beacons;
			beaconList.forEach((beacon) => {
				let beaconObject = new BeaconModel(beacon);
				this.beacons.push(beaconObject);
			});

			for (let i=0; i<this.beacons.length; i++)
				if (this.beacons[i].major == 64966){
					this.navCtrl.push(GiocondaPage);
				}

			});
				

		});
	}

}
/*
@Component({
  
  templateUrl: 'build/pages/esplora-il-museo/gioconda-modal.html'
})
export class GiocondaModal {


	constructor(public viewCtrl: ViewController, public loadingController:LoadingController) {


	}
	cancel() {
    	this.viewCtrl.dismiss();
  	}
	
}*/
