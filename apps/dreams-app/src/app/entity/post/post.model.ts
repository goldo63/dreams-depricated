import { User } from "../user/user.model";
/* eslint-disable @typescript-eslint/no-inferrable-types */

export enum ViewState {
    public = 'public',
    private = 'private',
    hidden = 'hidden',
}

export class Post {
  id: number | undefined;
  titel: string;
  content: string;
  viewstate: ViewState = ViewState.public;
  img = null;
  user: User;

  constructor(titel = '', content = '', user: User) {
    this.titel = titel;
    this.content = content;
    this.user = user;
  }
}
