import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import { FirebaserestProvider } from '../../providers/firebaserest/firebaserest';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  validations_form: FormGroup;
  errorMessage: string = '';
  validation_messages = {
    'rfc': [
      { type: 'required', message: 'RFC incorrecto' },
 //     { type: 'pattern', message: 'Se requiere un  RFC Valido.' },
      { type: 'minlength', message: 'Minimo 12 digitos' },
      { type: 'maxlength', message: 'Maximo 13 digitos' }
    ],
    'name': [
      { type: 'required', message: 'Ingrese nombre ' },
    ],
    'calle': [
      { type: 'required', message: 'Ingrese calle ' },
    ],
    'callenumero': [
      { type: 'required', message: 'Ingrese numero ' },
      { type: 'pattern', message: 'El numero no es valido.' }
    ],
    'telefono': [
      { type: 'required', message: 'Ingrese telefono ' },
      { type: 'minlength', message: 'Minimo 10 digitos' },
      { type: 'pattern', message: 'No es valido ej.(3110000000).' }
    ],
    'emailc': [
      { type: 'required', message: 'Ingrese correo ' },
      { type: 'pattern', message: 'No es valido ej.(eje@gmail.com)' }
    ],
    'activo': [
      { type: 'required', message: 'seleccione' },
    ]
  };
  constructor(
    public navCtrl: NavController,public alertCtrl: AlertController,
    private db: FirebaserestProvider,
    private formBuilder: FormBuilder
  ) {
  }
  ionViewWillLoad(){
    this.validations_form = this.formBuilder.group({
      rfc: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(13),
        Validators.pattern(/^([A-Z]{3,4})?(?:-?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01]))?(?:-?)?([A-Z\d]{2})([A\d])$/)
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      calle: new FormControl('', Validators.compose([
        Validators.required
      ])),
      callenumero: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ])),
      telefono: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(7),
        Validators.pattern("^[0-9]*$")
      ])),
      emailc: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"),
      ])),
      activo: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }
  agregarPersona(valor){
    console.log(valor);
    this.db.agregarPersona(valor);
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Felicidades!',
      subTitle: 'Se guardo exitosamente',
      buttons: ['Ok']
    });
    alert.present();
  }
}
