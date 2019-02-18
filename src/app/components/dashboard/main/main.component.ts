import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { SessionService } from 'src/app/shared/services/session.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  user: User;
  options: FormGroup;

  constructor(
    private sessionService: SessionService,
    fb: FormBuilder
  ) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

  ngOnInit() {
    this.user = this.sessionService.getUser();
  }

}
