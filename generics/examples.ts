import { Decimal } from "./decimal";

// T: Represents the data type received as parameter an in this case match the return value
function identity<T>(value: T): T {
  return value;
}

function isNull<T>(a: T): Boolean {
  return a == null;
}

// sum<T extends Number> causes error because we can't use the addition operator (+) to add the non-primitive object types
function sum<T extends Number>(a: T, b: T): number {
  // Number: An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers.
  // var Number: NumberConstructor(value?: any) => number
  return Number(a) + Number(b);
}
sum<number>(1, 2);
sum<Number>(1, 2);
sum<Number>(Number(1), Number(2));

console.log(sum(new Decimal(0), new Decimal(1 / 3)));

isNull<String>("a");
isNull<Number>(0);

function concatString<T extends String>(a: T): String {
  return a + "a";
}

class SuperString extends String {}

concatString<SuperString>(new SuperString());
concatString<SuperString>("S");

identity(123);
identity<Number>(123);
// identity<Number>("a");

/**
 * Transform a list into an Array
 * making sure each element on the list is of type T
 * @param {T[]} items
 * @returns {Array<T>}
 */
function getArrayOfType<T>(items: T[] = []): Array<T> {
  return new Array<T>().concat(items);
}

getArrayOfType([1, 2, 3, "5"]);
getArrayOfType<any>([1, 2, 3, "5"]);
// getArrayOfType<Number>([1, 2, 3, "5"]);
// getArrayOfType<String>([1, 2, 3, "5"]);

type User = { id?: string; name: string };
const numArray = getArrayOfType<Number>();
const stringArray = getArrayOfType<String>();
const userArray = getArrayOfType<User>();

numArray.push(1);
// numArray.push('1')
stringArray.push("str");
// stringArray.push(1)

userArray.push({ name: "John" });
// userArray.push({ id: "1" });

// ------------------------------------------------------------------------------------

/**
 * Join a list validating the type of each element
 * @param list
 * @returns String
 */
function join<T>(list: T[]): String {
  return list.filter(Boolean).join(", ");
}

let num: Number;
// num = join(["a", "b", undefined, null, 0]);
let str: String = join(["a", "b", undefined, null, 0]);
// join<Number>(["a", "b", undefined, null, 0]);

/**
 * Creating Mapped Types with Generics
 */
type AllStringValues<T> = {
  // K exists as keys of T
  [K in keyof T]: String;
};

type Address = {
  street: String;
  number: Number;
  zipCode: Number;
  city: string;
};

const address: AllStringValues<Address> = {
  street: "street",
  number: "000",
  zipCode: "01000",
  // zipCode: 1000, // Fails because AllStringValues values must be a string
  city: "city",
  // country: "Country", // Fails because country is not a key of Address
};

const user: Readonly<User> = {
  id: "1",
  name: "John",
};
// Cannot assign to 'id' because it is a read-only property
// user.id = "2";

type GetReturnType<T> = T extends (...args: any[]) => infer U ? U : never;

function someFunction(a, b) {
  return parseInt(a + b);
}

type ReturnTypeOfSomeFunction = GetReturnType<typeof someFunction>;
const result: number = someFunction(5, 5);
// const result: string = someFunction(5, 5);

/**
 * ReturnType
 */
type s = ReturnType<typeof someFunction>;
// const r: s = 'a';
const r: s = someFunction("1", "2");

/**
 * Graphs
 */
const graph01 = {
  A: {
    A: null,
    B: 20,
    C: 60,
    D: 10,
  },
  B: {
    A: 10,
    B: null,
    C: 10,
    D: 30,
  },
  C: {
    A: 10,
    B: 5,
    C: null,
    D: 14,
  },
  D: {
    A: 1,
    B: 10,
    C: 40,
    D: null,
  },
};

type Nodes = "A" | "B" | "C" | "D";
type DirectedGraphNoAutoReferencesWithoutValue<
  Keys extends string,
  T,
  OtherType
> = {
  [K in Keys]: {
    [SameThanK in K]: T;
  } & { [OtherThanK in Exclude<Keys, K>]: OtherType };
};

const graph: DirectedGraphNoAutoReferencesWithoutValue<Nodes, null, number> =
  graph01;

type DirectedGraphNoAutoReferences<Keys extends string, OtherType> = {
  [K in Keys]: { [OtherThanK in Exclude<Keys, K>]?: OtherType };
};

const graph02: DirectedGraphNoAutoReferences<Nodes, number> = {
  A: {
    B: 10,
    C: 60,
    D: 10,
  },
  B: {
    A: 10,
    C: 10,
    D: 30,
  },
  C: {
    A: 10,
    B: 5,
    D: 14,
  },
  D: {
    A: 1,
    B: 10,
    C: 40,
  },
};
