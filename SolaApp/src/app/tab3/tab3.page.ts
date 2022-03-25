import { Component, ElementRef, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Geolocation} from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  tittle: string = "Location";

  map: google.maps.Map;
  myPosition: google.maps.LatLng;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor(private geolocation: Geolocation) {}

  ionViewWillEnter(){
    this.showMap();
  }

  showMap() {
    const position = new google.maps.LatLng(53.35833165681358, -6.257304000372879);
    const options = {
      center: position,
      zoom: 1,
      disableDefaultUI: true
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.findPosition();


  }

  findPosition() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude

      this.myPosition = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

      this.goToMyPosition();

     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  goToMyPosition() {
    this.map.setCenter(this.myPosition);
    this.map.setZoom(15);

    const marker = new google.maps.Marker({
      position: this.myPosition,
      title: 'Your Location!',
      animation: google.maps.Animation.BOUNCE,
      map: this.map
    })

  }

}
