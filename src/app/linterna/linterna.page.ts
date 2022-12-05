import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx'

@Component({
  selector: 'app-linterna',
  templateUrl: './linterna.page.html',
  styleUrls: ['./linterna.page.scss'],
})
export class LinternaPage implements OnInit {

  encendido:boolean = false

  onOff(){
    if(this.encendido){
      this.linterna.switchOff()
      this.encendido = false
    }else{
      this.linterna.switchOn()
      this.encendido = true
    }
  }

  constructor( private linterna: Flashlight ) { }

  ngOnInit() {
  }

}
