import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ActionSheetController } from '@ionic/angular';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Mensaje } from "../../mensaje";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {

  icon = 'earth-outline'
  color = 'primary'
  activo = false


  modelo:Mensaje = {
    nombre:'',
    correo:'',
    mensaje:''
  }

  latitud = 0
  longitud = 0

  productos = [
    {
      nombre:'Morral De Montaña Trekking De Flores 10 L',
      precio:19.99,
      img:'../../../assets/bolso de flores.jpg',
      id:0
    },
    {
      nombre:'Bolso De Moto Impermeable',
      precio:69.99,
      img:'../../../assets/bolso de moto.jpg',
      id:1
    },
    {
      nombre:'Bolso Urbano Swissgear Morral Grande Unisex Escolar Laptop',
      precio:20,
      img:'../../../assets/bolso para lapto.jpg',
      id:2
    }
  ]

  productID:any;

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    const id = this.roter.snapshot.paramMap.get('id')
    this.productID = parseInt(`${id}`)
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Iniciar Seción',
          role: 'selected',
          icon: 'person-circle',
          handler:()=>{
            this.router.navigate(['./home'])
          }
        },
        {
          text: 'Catalogo',
          role: 'selected',
          icon: 'bag',
          handler:()=>{
            this.router.navigate(['./tienda'])
          }
        },
        {
          text: 'Crear Usuarios',
          role: 'selected',
          icon: 'person-add',
          handler:()=>{
            this.router.navigate(['./register'])
          }
        },
        {
          text: 'Linterna',
          role: 'selected',
          icon: 'flashlight',
          handler:()=>{
            this.router.navigate(['./linterna'])
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

  async error(err:any) {
    let alert = await this.alertCtrl.create({
     header:'Error',
     message: `Ah ocurrido el error: "${err}", vuelve a intentarlo.`,
     buttons: ['Aceptar']
   });
   alert.present();
 }

  ubicacion(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitud = resp.coords.latitude;
      this.longitud =  resp.coords.longitude;
    }).catch((error) => {
       console.log(error)
    });

    this.icon = 'checkmark-outline'
    this.color = 'success'
    this.activo = true
  }

  enviarSms(){
    this.sms.send('04245142978', `Producto: ${this.productos[this.productID].nombre}\nCliente: ${this.modelo.nombre}\nCorreo: ${this.modelo.correo}\nUbicacion:\n latitud: ${this.latitud}, longitud: ${this.longitud} \nMensaje: ${this.modelo.mensaje}`);
    this.router.navigate(['./home'])
  }

  constructor(private alertCtrl: AlertController, public roter: ActivatedRoute, private router: Router, private sms: SMS, private geolocation: Geolocation, private actionSheetCtrl: ActionSheetController) { }

}
