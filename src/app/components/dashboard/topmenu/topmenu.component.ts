import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss']
})
export class TopmenuComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  @Output() public rightsidenavToggle = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  public onToggleRightSidenav = () => {
    this.rightsidenavToggle.emit();
  }
  public animatedIcon(event: any, type: string) {
    event.target.classList.add('animated');
    event.target.classList.add(type);
  }
  public unAnimatedIcon(event: any, type: string) {
    event.target.classList.remove('animated');
    event.target.classList.remove(type);
  }

  public goToUnderConstruction() {
    this.router.navigate(['/dashboard/construction']);
  }
}
