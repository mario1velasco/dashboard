import { Component, OnInit, Inject } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.scss']
})
export class NewPlaceComponent implements OnInit {

  constructor(
    private sessionService: SessionService,
    public dialogRef: MatDialogRef<MapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.sessionService.checkIfUserLogin();
  }

}
