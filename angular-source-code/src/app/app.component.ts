import {Component, OnInit} from '@angular/core';
import {CommentService} from "./services/comment.service";
import {UserService} from "./services/user.service";
import {User} from "./models/User";
import {Comment} from "./models/Comment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentUser!: User;
  comments!: Comment[];

  constructor(private commentService: CommentService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    this.comments = this.commentService.getAll();
  }

  addNewComment(comment: string) {
    console.log('add new comment', {comment});
    this.comments.push({content: comment, createdAt: 'now', score: 0, user: this.currentUser});
  }

  onDeleteComment(value: Comment) {
    this.comments = this.comments?.filter(comment => comment.content !== value.content);
  }
}
