// Generics
function displayNames<T>(names: T[]): void {
  console.log(names.join(", "));
}
displayNames<string>(["Steve", "Bill"]);

// Generic Constraints
class Person {
  firstName: string;
  lastName: string;

  constructor(fname: string, lname: string) {
    this.firstName = fname;
    this.lastName = lname;
  }
}

function display<T extends Person>(per: T): void {
  console.log(`${per.firstName} ${per.lastName}`);
}
var per = new Person("Bill", "Gates");
display(per);

// Generic Interfaces
interface KeyPair<T, U> {
  key: T;
  value: U;
}
