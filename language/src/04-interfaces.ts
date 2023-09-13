// interface as a type
interface GoogleAccount {
  profileName?: string;
  isAuthenticated?: boolean;
  photoURL?: string;
  email?: string;
}

const googleAccount: GoogleAccount = {};

// interface as a function type
interface Calculate {
  (a: number, b: number): number;
}

function sum(a: number, b: number): number {
  return a + b;
}

function minus(a: number, b: number): number {
  return a - b;
}

let exec: Calculate = sum;

console.log(exec(13, 12));
exec = minus;
console.log(exec(13, 12));

//  interface as a array type
interface NumList {
  [index: number]: number;
}

let numArr: NumList = [1, 2, 3];
numArr[0];
numArr[1];
console.log(numArr);

interface IStringList {
  [index: string]: string;
}

let strArr: IStringList = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";
console.log(strArr);

// readonly properties
interface Account {
  readonly balance: number;
}

// extending interfaces
interface Person {
  name: string;
  gender: string;
}

interface Employee extends Person {
  empCode: number;
}

let employee: Employee = {
  empCode: 1926834970,
  name: "Junaid Javed",
  gender: "Male",
};
