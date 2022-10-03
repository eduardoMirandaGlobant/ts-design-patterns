import { User } from "./user";
import { UserAdapter } from "./user-adapter";
import { IUser } from "./user.interface";
import { IUser2 } from "./user2.interface";

/**
 * Adapter
 * Category: Structural, object
 * Objective: To act as an intermediary between two classes, converting the interface of one class so that it can be used by another.
 * An Adapter object provides the functionality promised by an interface without having to know which class is used to implement it.
 * Allows two incompatible classes with interfaces to work together.
 * Applicability: The adapter pattern should be used when:
 *
 * You want to use a class that calls a method through a interface, but you want to use it with a class that does not implement such an interface.
 * It seeks to dynamically determine which methods of other objects an object calls.
 * You don't want the called object to have knowledge of the other object class.
 */
class Client {
  main() {
    const user: IUser2 = new User("John", "Doe", new Date("2001-02-02"));
    console.log(user.getBirthDay());

    const adapter: IUser = new UserAdapter(user);
    console.log(adapter.getAge());
  }
}

const c = new Client();
c.main();
