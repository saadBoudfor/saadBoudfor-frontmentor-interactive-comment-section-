import {Component, Input, OnInit, Output} from '@angular/core';
import {Comment} from "../models/Comment";
import {UserService} from "../services/user.service";
import {User} from "../models/User";
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {


  @Input()
  comment!: Comment;

  @Output()
  delete = new EventEmitter<Comment>();

  // template variables
  currentUser!: User;
  isCurrentUserComment: boolean = false;
  reply: boolean = false;
  update: boolean = false;
  confirmDelete: boolean = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    if (this.comment && this.comment.user?.id) {
      this.isCurrentUserComment = this.comment.user.id === this.currentUser.id;
    }
  }

  addReply(message: string, comment: Comment) {
    const reply = {user: this.currentUser, score: 0, content: message, createdAt: 'now'};
    if (comment.replies && comment.replies.length !== 0) {
      comment.replies.push(reply);
    } else {
      comment.replies = [reply];
    }
    console.log(comment);
    this.reply = false;
  }

  onClick() {
    this.reply = true;
  }

  increaseScore() {
    if (this?.comment.score)
      this.comment.score++;
    else
      this.comment.score = 1;
  }

  decreaseScore() {
    if (this?.comment.score)
      this.comment.score--;
  }

  updateContent(content: string, comment: Comment) {
    comment.content = content;
    this.update = false;
  }

  onDeleteReply(comment: Comment) {
    this.comment.replies = this.comment.replies?.filter(reply => reply.content !== comment.content);
  }
}
