import { IUser } from "./user.interface";
import { IUser2 } from "./user2.interface";

export class UserAdapter implements IUser {
  private user: IUser2;
  constructor(user: IUser2) {
    this.user = user;
  }

  getName(): String {
    return this.user.getName();
  }

  getLastName(): String {
    return this.user.getLastName();
  }

  getAge(): Number {
    const birthDay = this.user.getBirthDay();
    const diff = Math.abs(new Date().getFullYear() - birthDay.getFullYear());
    return diff;
  }
}
