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
  name = new FormControl('', [Validators.minLength(4), Validators.required]);
  constructor(
    private router: Router,
    private sessionService: SessionService
  ) { }

  getErrorEmailMessage() {
    return this.email.hasError('required') ? 'No puede estar vacío' :
           this.email.hasError('email') ? 'Email no válido' :
            '';
  }

  getErrorNameMessage() {
    return this.name.hasError('minLength') ? 'Mínimo cuatro caracteres' :
           this.name.hasError('required') ? 'No puede estar vacío' :
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
