import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss'],
})
export class TiendaComponent implements OnInit {

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

  constructor(private actionSheetCtrl: ActionSheetController, private router: Router) {}

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

  ngOnInit() {}

}
