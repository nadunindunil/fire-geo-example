import { Component, OnInit } from '@angular/core';
import { GeoService } from '../geo.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  lat: number;
  lng: number;

  markers: any;
  subscription: any;

  constructor(private geo: GeoService) {
    
   }

   private seedDatabase() {
    let dummyPoints = [
      [6.2, 79.34],
      [6.82, 79.9],
      [6.72, 80.4],
      [6.5, 79.4],
      [6.92, 79.8]
    ]
  
    dummyPoints.forEach((val, idx) => {
      let name = `dummy-location-${idx}`
      console.log(idx)
      this.geo.setLocation(name, val)
    })
  }

  ngOnInit() {
    this.seedDatabase();
    this.getUserLocation()
    this.subscription = this.geo.hits
        .subscribe(hits => this.markers = hits)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onDestroy(){
    this.subscription.unsubscribe();
  }

  private getUserLocation() {
   /// locate the user
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this.lat = position.coords.latitude;
       this.lng = position.coords.longitude;


       this.geo.getLocations(50, [this.lat, this.lng])
     });
   }
 }
}
