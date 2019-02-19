import { User } from './../../../shared/models/user.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  user: User;
  constructor(
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
    this.user = this.sessionService.getUser();
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
