import { IUser } from '../modules/user';

export interface IChat {
  id: number;
  content: string;
  sender: IUser;
  images: { id: number; src: string }[];
  createdAt: Date;
}

export interface SendMessage {
  chat: string;
  imageUrls?: string[];
}
