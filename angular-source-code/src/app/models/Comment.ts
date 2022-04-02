import {User} from "./User";

export class Comment {
  id?: number;
  content?: string;
  score?: number;
  createdAt?: string;
  replyingTo?: string;
  user?: User;
  replies?: Comment[];
}
