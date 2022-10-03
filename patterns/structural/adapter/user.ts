import { IUser2 } from "./user2.interface";

export class User implements IUser2 {
  protected name: String;
  protected lastName: String;
  protected birthDay: Date;
  constructor(name: String, lastName: String, birthDay: Date) {
    this.name = name;
    this.lastName = lastName;
    this.birthDay = birthDay;
  }

  getName(): String {
    return this.name;
  }

  getLastName(): String {
    return this.lastName;
  }

  getBirthDay() {
    return this.birthDay;
  }
}
