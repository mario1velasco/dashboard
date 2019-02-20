import { SessionService } from 'src/app/shared/services/session.service';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-rigthsidenav',
  templateUrl: './rigthsidenav.component.html',
  styleUrls: ['./rigthsidenav.component.scss']
})
export class RigthsidenavComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: any,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
  }

  public goToSitumClick() {
    this.sessionService.logout();
    this.document.location.href = 'https://situm.es/es/pruebanos';
  }

}
