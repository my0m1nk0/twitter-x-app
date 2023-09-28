import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signOut() {
    throw new Error('Method not implemented.');
  }
  userData: any;
  loggedInUserId: any;

  constructor() { }
}
