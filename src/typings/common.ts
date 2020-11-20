import { IUser } from '../modules/user';

export interface IMessage {
  id: number;
  content: string;
  sender: IUser;
  images: { id: number; src: string }[];
  createdAt: Date;
}
