import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFireDatabase } from '@angular/fire/database'
import 'firebase/storage'
/*
Generated class for the FirebaserestProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class FirebaserestProvider {
  private snapshotChangesSubscription: any;
  constructor(
    public http: HttpClient,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,) {
      console.log('Hello FirebaserestProvider Provider');
    }
    /* API REST*/
    obtenerPersonas(){
      return new Promise<any>((resolve, reject) => {
        let currentUser = firebase.auth().currentUser;
        this.snapshotChangesSubscription = this.afs.collection('personas').valueChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        })
      });
    }
    unsubscribeOnLogOut(){
      this.snapshotChangesSubscription.unsubscribe();
    }

    agregarPersona(value){
      return new Promise<any>((resolve, reject) => {
        let currentUser = firebase.auth().currentUser;
        this.afs.collection('personas').add({
          rfc: value.rfc,
          name: value.name,
          calle: value.calle,
          callenumero: value.callenumero,
          telefono: value.telefono,
          email: value.emailc,
          activo: value.activo,
        })
        .then(
          res => resolve(res),
          err => reject(err)
        )
      })
    }

  }
