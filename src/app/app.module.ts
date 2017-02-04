import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SelezionePercorsoPage } from '../pages/selezione-percorso/selezione-percorso';
import { EsploraIlMuseoPage } from "../pages/esplora-il-museo/esplora-il-museo";
import {GiocondaPage} from "../pages/gioconda/gioconda";
import { BeaconProvider } from '../providers/beacon-provider';
import { Data } from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelezionePercorsoPage,
    EsploraIlMuseoPage,
    GiocondaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SelezionePercorsoPage,
    EsploraIlMuseoPage,
    GiocondaPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, BeaconProvider, Data]
})
export class AppModule {}
