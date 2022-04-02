import {Injectable} from '@angular/core';
import {data} from "./Data";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() {
  }


  getAll() {
    console.log('load comments', {currentUser: data.comments});
    return data.comments;
  }
}

