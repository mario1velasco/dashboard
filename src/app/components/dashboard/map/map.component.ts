import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
// import { } from '@types/googlemaps';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Place } from 'src/app/shared/models/place.model';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { NewPlaceComponent } from '../new-place/new-place.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  displayedColumns: string[] = ['id', 'info', 'ir', 'borrar'];
  dataSource = new MatTableDataSource();
  id = 0;
  showAddPlace = false;
  places: Array<Place>;
  lat = 41.2181331;
  lng = -3.6871827;
  zoom = 7;

  constructor(
    private sessionService: SessionService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {  }

  ngOnInit() {
    this.sessionService.checkIfUserLogin();
    this.places = this.sessionService.getPlaces();
    this.dataSource = new MatTableDataSource(this.places);
  }

  public handleAddressChange(option: string) {}

  public selectPlaceOnClick($event) {
    if (this.showAddPlace === false) {
      return;
    }

    const dialogRef = this.dialog.open(NewPlaceComponent, {
      data: {lat: $event.coords.lat,
             lng: $event.coords.lng,
              id: this.places[this.places.length - 1].id + 1}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === '') {
        this.showAddPlace = false;
        return;
      }
      console.log('The dialog was closed');
      this.places.push(result);
      this.showAddPlace = false;
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
    this.dataSource = new MatTableDataSource(this.places);
  }

  public goToPlaceOnCLick(id: number) {
    for (let index = 0; index < this.places.length; index++) {
      const element = this.places[index];
      if (element.id === id) {
        this.lat = element.lat;
        this.lng = element.lng;
        this.zoom = 13;
      }
    }
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    // debugger
  }

}
