import { Injectable } from '@angular/core';
import {data} from "./Data";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  getCurrentUser() {
    console.log('load current user information', {currentUser: data.currentUser});
    return data.currentUser;
  }
}
