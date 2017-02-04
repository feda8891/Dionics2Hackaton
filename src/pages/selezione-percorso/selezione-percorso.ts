import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { EsploraIlMuseoPage } from "../esplora-il-museo/esplora-il-museo";

/*
  Generated class for the SelezionePercorso page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-selezione-percorso',
  templateUrl: 'selezione-percorso.html'
})
export class SelezionePercorsoPage {
  
  public selected: number;
  public total: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {

  	this.selected = 1;
  	this.total = 15;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelezionePercorsoPage');
  }

  public select(i : number){
  	this.selected = i;
  	if (this.selected == 1){
  		this.total = 15;
  	}
  	else if(this.selected == 2){
  		this.total = 20;
  	}
  	else if(this.selected == 3){
  		this.total = 25;
  	}
  }

  public iniziaViggio(){

  	
	let loader = this.loadingCtrl.create({
  		content: "Avvio...",
  		duration: 500
	});

	loader.onDidDismiss(data => {

	    	this.navCtrl.push(EsploraIlMuseoPage);
	});
    loader.present();	

  }

}
