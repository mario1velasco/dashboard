import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss']
})
export class TopmenuComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  @Output() public rightsidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  public onToggleRightSidenav = () => {
    this.rightsidenavToggle.emit();
  }
}
