import { User } from './../../../shared/models/user.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SessionService } from 'src/app/shared/services/session.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.sessionService.getUser();
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  public goToUnderConstruction() {
    this.router.navigate(['/dashboard/construction']);
  }

  public animatedIcon(event: any, type: string) {
    event.target.classList.add('animated');
    event.target.classList.add(type);
  }
  public unAnimatedIcon(event: any, type: string) {
    // debugger
    event.target.classList.remove('animated');
    event.target.classList.remove(type);
  }

}
