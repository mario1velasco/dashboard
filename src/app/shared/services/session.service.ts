import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Place } from '../models/place.model';
import { Router } from '@angular/router';


const CURRENT_USER_KEY = 'currentUser';
const CURRENT_PLACES_KEY = 'currentPlaces';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private user: User;
  private places: Array<Place>;

  constructor(
    private router: Router
  ) {
    this.user = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
    this.places = JSON.parse(localStorage.getItem(CURRENT_PLACES_KEY));
   }

  logout(): void {
    this.setUser(new User());
    this.setPlaces(new Array<Place>());
  }

  signin(user: User): void {
    this.setUser(user);
    this.setPlaces(this.initializePlaces());
  }

  getUser(): User {
    return this.user;
  }

  getPlaces(): Array<Place> {
    return this.places;
  }

  setUser(user: User): void {
    this.user = user;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(this.user));
  }

  setPlaces(places: Array<Place>): void {
    this.places = places;
    localStorage.setItem(CURRENT_PLACES_KEY, JSON.stringify(this.places));
  }

  checkIfUserLogin() {
    if ((this.getPlaces().length === 0) ||
    (Object.entries(this.getUser()).length === 0)) {
      this.router.navigateByUrl('/index');
    }
    this.places = this.getPlaces();
  }
  initializePlaces(): Array<Place> {
    return this.places = [
      {
        id: 0,
        lat: 40.2181331,
        lng: -3.6871827,
        info: 'Entre Pinto y Valdemoro',
      },
      {
        id: 1,
        lat: 42.8724734,
        lng: -8.5630063,
        info: 'SITUM',
      },
      {
        id: 2,
        lat: 41.5911933,
        lng: -4.8334363,
        info: 'Papas',
      },
      {
        id: 3,
        lat: 40.4917521,
        lng: -3.5958557,
        info: 'Barajas',
      }
    ];
  }
}
