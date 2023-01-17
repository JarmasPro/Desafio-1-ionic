import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario = '../../assets/user.jpg';
  latitud:number = 0;
  longitud:number = 0;

  tomarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      cameraDirection: 1,
    }

    this.camera.getPicture(options).then((imageData) => {
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.usuario = base64Image;
    }, (err) => {
      this.error(err)
    });
  }

  ubicacion(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitud = resp.coords.latitude;
      this.longitud =  resp.coords.longitude;
     }).catch((error) => {
       error(error)
     });
  }

   async error(err:any) {
     let alert = await this.alertCtrl.create({
      header:'Error',
      message: `Ah ocurrido el error: "${err}", vuelve a intentarlo.`,
      buttons: ['Aceptar']
    });
    alert.present();
  }

  constructor( private camera: Camera, private alertCtrl: AlertController, private geolocation: Geolocation ) { }

  ngOnInit() {
  }

}
