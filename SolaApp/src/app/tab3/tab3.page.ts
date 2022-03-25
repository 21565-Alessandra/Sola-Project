import { Component, ElementRef, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  tittle: string = "Location";

  map: google.maps.Map;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor() {}

  ionViewWillEnter(){
    this.showMap();
  }

  showMap() {
    const position = new google.maps.LatLng(53.35833165681358, -6.257304000372879);
    const options = {
      center: position,
      zoom: 15,
      disableDefaultUI: true
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    new google.maps.Marker({
      position: position,
      map: this.map,
      title: "Dorset College",
      animation: google.maps.Animation.BOUNCE
    });
  }



}
