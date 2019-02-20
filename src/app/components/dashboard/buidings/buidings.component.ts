import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/shared/models/place.model';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-buidings',
  templateUrl: './buidings.component.html',
  styleUrls: ['./buidings.component.scss']
})
export class BuidingsComponent implements OnInit {
  places: Array<Place>;
  panelOpenState = false;

  constructor(
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.sessionService.checkIfUserLogin();
    this.places = this.sessionService.getPlaces();
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
