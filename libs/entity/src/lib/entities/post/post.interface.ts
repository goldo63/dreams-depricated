import { Id } from '../../data/id.type'
import { User } from '../user/user.interface'

export enum ViewState {
  public = 'public',
  private = 'private',
  hidden = 'hidden',
}

export interface PostInfo{
  id: string;
  titel: string;
  content: string;
  viewstate: ViewState;
  img: undefined;
}
