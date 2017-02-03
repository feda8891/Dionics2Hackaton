import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SelezionePercorsoPage } from '../pages/selezione-percorso/selezione-percorso';
import { BeaconProvider } from '../providers/beacon-provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelezionePercorsoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SelezionePercorsoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, BeaconProvider]
})
export class AppModule {}
