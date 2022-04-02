import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from "../models/User";
import {Environment} from "@angular/compiler-cli/src/ngtsc/typecheck/src/environment";
import {EventEmitter} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {

  @Input()
  currentUser!: User;

  @Output()
  comment = new EventEmitter<string>();

  message!: string;

  @Input()
  updateComment = false;

  @Input()
  set value(_value: string | undefined) {
    if (_value)
      this.message = _value;
  }

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
  }
}
