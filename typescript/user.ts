import { Client } from "./client";
import { Customer } from "./customer";

/**
 * @see https://medium.com/@Methrat0n/union-types-and-intersection-types-50c41c9b61d6
 */
type User = Pick<Client, "address"> &
  Pick<Customer, "name" | "lastName"> & { id: string };

const user: User = {
  name: "name",
  lastName: "last name",
  address: {
    street: "street",
    country: "country",
  },
  id: "1",
};

console.log(user);

/**
 * Can be either Client or Customer
 */
type User2 = Client | Customer | { id: string };

const user2: User2 = {
  id: "id",
  name: "name",
  lastName: "last name",
  phone: "phone-number",
  clientId: "1",
  address: null,
};

console.log(user2);

/**
 * Must be both Client and Customer
 */
type User3 = (Client & Customer) | { id: string };

const user3: User3 = {
  id: "1",
  name: "name",
  lastName: "last name",
  clientId: "client-id",
  address: {
    street: "street",
    country: "country",
  },
  phone: "phone-number",
};

console.log(user3);

const user4: Partial<Customer> = {
  name: "name",
  phone: "phone",
};

console.log(user4);
