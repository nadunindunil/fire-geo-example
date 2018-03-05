import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { GeoService } from './geo.service';


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    }),
    AngularFireDatabaseModule
  ],
  providers: [GeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
