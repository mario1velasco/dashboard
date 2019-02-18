import { Injectable } from '@angular/core';
import { User } from '../models/user.model';


const CURRENT_USER_KEY = 'currentUser';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private user: User;

  constructor() {
    this.user = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
   }

  logout(): void {
    this.setUser(new User());
  }

  signin(user: User): void {
    this.setUser(user);
  }

  getUser(): User {
    return this.user;
  }

  setUser(user: User): void {
    this.user = user;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(this.user));
  }
}
