import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
// import { } from '@types/googlemaps';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Place } from 'src/app/shared/models/place.model';
import { MatDialog } from '@angular/material';
import { NewPlaceComponent } from '../new-place/new-place.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  id = 0;
  showAddPlace = false;
  places: Array<Place>;

  constructor(
    private sessionService: SessionService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {  }

  ngOnInit() {
    if ((this.sessionService.getPlaces().length === 0) ||
        (Object.entries(this.sessionService.getUser()).length === 0)) {
      this.router.navigateByUrl('/index');
    }
    this.places = this.sessionService.getPlaces();
  }

  public handleAddressChange(option: string) {}

  public selectPlaceOnClick($event) {
    if (this.showAddPlace === false) {
      return;
    }
    this.showAddPlace = false;
    const dialogRef = this.dialog.open(NewPlaceComponent, {
      data: {lat: $event.coords.lat,
             lng: $event.coords.lng,
              id: this.places[this.places.length - 1].id + 1}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === '') {
        return;
      }
      console.log('The dialog was closed');
      this.places.push(result);
    });
  }

  public deletePlaceOnCLick(id: number) {
    let position = [];
    for (let index = 0; index < this.places.length; index++) {
      const element = this.places[index];
      if (element.id === id) {
        position.push(index);
      }
    }
    this.places.splice(position[0], 1);
  }

}
