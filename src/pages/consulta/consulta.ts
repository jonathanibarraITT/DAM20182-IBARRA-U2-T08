import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaserestProvider } from '../../providers/firebaserest/firebaserest';

@Component({
  selector: 'page-consulta',
  templateUrl: 'consulta.html'
})
export class ConsultaPage {
  personas:any;
  constructor(
    public navCtrl: NavController,
    private db: FirebaserestProvider,
  ) {
    this.db.obtenerPersonas()
    .then(personas => {
      this.personas = personas;
      console.log('Contructor');
      console.log(this.personas);
    });

  }

  ionViewDidEnter() {
    this.db.obtenerPersonas()
    .then(personas => {
      this.personas = personas;
      console.log('onViewDidEnter');
      console.log(this.personas);
    });
  }

}
