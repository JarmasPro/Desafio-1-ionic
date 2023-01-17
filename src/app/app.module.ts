import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { Flashlight } from "@awesome-cordova-plugins/flashlight/ngx";
import { Camera } from "@awesome-cordova-plugins/camera/ngx";
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Flashlight,Camera,Geolocation,SMS],
  bootstrap: [AppComponent],
})
export class AppModule {}
