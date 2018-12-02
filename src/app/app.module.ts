import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ConsultaPage } from '../pages/consulta/consulta';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FirebaserestProvider } from '../providers/firebaserest/firebaserest';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCKIm28uzZxpGW8A8rVy421tX7oX0Ki3Cw",
  authDomain: "dam20182-ibarra-crud.firebaseapp.com",
  databaseURL: "https://dam20182-ibarra-crud.firebaseio.com",
  projectId: "dam20182-ibarra-crud",
  storageBucket: "dam20182-ibarra-crud.appspot.com",
  messagingSenderId: "908231187591"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ConsultaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ConsultaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaserestProvider
  ]
})
export class AppModule {}
