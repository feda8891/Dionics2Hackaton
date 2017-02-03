import { Component } from '@angular/core';

import { NavController, Platform, Events, Alert, NavParams } from 'ionic-angular';
import { NgZone } from '@angular/core';
import { IBeacon, LocalNotifications } from 'ionic-native';
// providers
import { BeaconProvider } from '../../providers/beacon-provider';

// models
import { BeaconModel } from '../../models/beacon-module';

import { SelezionePercorsoPage } from "../selezione-percorso/selezione-percorso";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	beacons: BeaconModel[] = [];
	zone: any;

	constructor(public navCtrl: NavController, public platform: Platform, public beaconProvider: BeaconProvider, public events: Events) {
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
					this.schedule();
				}

			});
				

		});
	}

	public schedule() {
        LocalNotifications.schedule({
            title: "Test Title",
            text: "Delayed Notification",
            at: new Date(new Date().getTime() + 1000),
            sound: "res://platform_default"
        });
    }

    selezionePercorso(){
    	this.navCtrl.push(SelezionePercorsoPage);
    }

}
