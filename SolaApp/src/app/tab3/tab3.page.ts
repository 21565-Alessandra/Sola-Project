import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  tittle: string = 'Location';

  map: google.maps.Map;
  myPosition: google.maps.LatLng;

  addressList: any = [];

  private autoComplete = new google.maps.places.AutocompleteService();
  private direction = new google.maps.DirectionsService();
  private directionsRender = new google.maps.DirectionsRenderer();

  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  constructor(private geolocation: Geolocation, private ngZone: NgZone) {}

  ionViewWillEnter() {
    this.showMap();
  }

  showMap() {
    const position = new google.maps.LatLng(
      53.35833165681358,
      -6.257304000372879
    );
    const options = {
      center: position,
      zoom: 1,
      disableDefaultUI: true,
    };

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.findPosition();
  }

  findPosition() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        // resp.coords.latitude
        // resp.coords.longitude

        this.myPosition = new google.maps.LatLng(
          resp.coords.latitude,
          resp.coords.longitude
        );

        this.goToMyPosition();
      })
      .catch((error) => {
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
      map: this.map,
    });
  }

  searchAddress(eventFieldSearch: any) {
    const search = eventFieldSearch.target.value as string;

    if (!search.trim().length) { this.addressList = []; return false; }

    this.autoComplete.getPlacePredictions({input: search}, (arrayPlaces, status) => {

      if(status == 'OK'){
        this.ngZone.run(()=>{
          this.addressList = arrayPlaces;
        });
      } else {
        this.addressList = [];
      }

    });
  }

  public traceRoute(place: google.maps.places.AutocompletePrediction){
    this.addressList = [];

    new google.maps.Geocoder().geocode({address: place.description}, result => {
      console.log(result);
      // this.map.setCenter(result[0].geometry.location);
      // this.map.setZoom(19);

      const marker = new google.maps.Marker({
        position: result[0].geometry.location,
        title: result[0].formatted_address,
        animation: google.maps.Animation.DROP,
        map: this.map
      });

      const mapRoute: google.maps.DirectionsRequest = {
        origin: this.myPosition,
        destination: result[0].geometry.location,
        unitSystem: google.maps.UnitSystem.METRIC,
        travelMode: google.maps.TravelMode.WALKING
      };

      this.direction.route(mapRoute, (directionResult, status) => {

        if(status == 'OK') {
          this.directionsRender.setMap(this.map);
          this.directionsRender.setDirections(directionResult);
          this.directionsRender.setOptions({suppressMarkers: true})
          console.log(directionResult);
        }

      });

    });
  }

}
