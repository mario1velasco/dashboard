import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  title = 'Situm Mega Dashboard';
  user: User = new User();
  apiError: object;
  bufferValue = 0;

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  constructor(
    private router: Router,
    private sessionService: SessionService
  ) { }

  getErrorMessage() {
    if (this.name.valid && this.email.valid) {
      this.bufferValue = 100;
    } else if (this.name.valid) {
      this.bufferValue = 50;
    } else  if (this.email.valid) {
      this.bufferValue = 50;
    } else {
      this.bufferValue = 0;
    }
    return this.email.hasError('required') ? 'You must enter a value' :
           this.email.hasError('email') ? 'Not a valid email' :
           this.name.hasError('required') ? 'You must enter a value' :
            '';
  }

  onSubmitSignup(loginForm: NgForm) {
    this.user.id = '1';
    this.user.email = this.email.value;
    this.user.name = this.name.value;
    this.sessionService.signin(this.user);
    loginForm.reset();
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
    this.sessionService.logout();
  }

}
