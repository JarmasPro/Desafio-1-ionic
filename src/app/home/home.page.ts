import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
          icon:'close',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

}
