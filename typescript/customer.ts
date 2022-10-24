export class Customer {
  name: string;
  lastName: string;
  phone: string;
  createdAt: Date;

  constructor(user: Partial<Customer> = {}) {
    Object.assign(this, user);
  }
}

const customer = new Customer({ name: "name", phone: "phone" });
console.log(customer);
