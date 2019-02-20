import { SessionService } from './../../../shared/services/session.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(
    private sessionService: SessionService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.sessionService.checkIfUserLogin();
    this.user = this.sessionService.getUser();
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.email]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    if (Object.entries(this.user).length !== 0) {
      this.firstFormGroup.setValue({firstCtrl: this.user.email});
      this.secondFormGroup.setValue({secondCtrl: this.user.name});
    }
  }

  public saveProfileOnCLick() {
    this.user.email = this.firstFormGroup.getRawValue().firstCtrl;
    this.user.name = this.secondFormGroup.getRawValue().secondCtrl;
    this.sessionService.setUser(this.user);
    this.router.navigate(['/dashboard']);
  }

}
