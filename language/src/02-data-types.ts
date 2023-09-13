/**
 *
 * Numbers: (number: primitive type, Number: Object type)
 *
 */

const first: number = 123; // number
const second: number = 0x37cf; // hexadecimal
const third: number = 0o377; // octal
const fourth: number = 0b111001; // binary
const fifth: number = 3.1428571;

console.log(first); // 123
console.log(second); // 14287
console.log(third); // 255
console.log(fourth); // 57

/**
 *
 *  Main Methods
 *
 * toExponential()
 * toFixed()
 * toLocaleString()
 * toPrecision()
 * toString()
 * valueOf()
 */

/**
 *
 * Strings: (string: primitive type, String: object type)
 *
 */

const str: string = "abc";
const str_dynamic: string = `${str}123`;

console.log(str); // abc
console.log(str_dynamic); // abc123

/**
 *
 *  Main Methods
 *
 * charAt()
 * concat()
 * indexOf()
 * replace()
 * split()
 * toUpperCase()
 * toLowerCase()
 */

/**
 *
 * Boolean: (boolean: Primitive type, Boolean: Object type)
 *
 */

var isPresent: boolean = true;
var isPresent: boolean = false;

console.log(isPresent);

/**
 *
 * Arrays
 *
 */

let arr_1: Array<string>;
let arr_2: (string | number)[];

arr_1 = ["a", "b"];
arr_2 = [1, "a", 2];

console.log(arr_1, arr_2);

/**
 *
 *  Main Methods
 *
 * pop()
 * push()
 * sort()
 * concat()
 * indexOf()
 * fill()
 * splice()
 * includes()
 * join()
 * lastIndexOf()
 * slice()
 * toString()
 */

/**
 *
 * Tuple: an array with a predefined length and predefined types in each index position in the array.
 *
 */

const person: [number, string] = [1, "Junaid Javed"];

person.push(2, "Javed Iqbal");
console.log(person);

/**
 *
 * Enum
 *
 */

// Numeric Enums
enum enum_var {
  VAL_1, // value = 0
  VAL_2, // value = 1
  VAL_3, // value = 2
}

// Computed Enums
const getValue = () => 2;
enum enum_var_1 {
  VAL = getValue(), // 2
  VAL_1 = VAL * 2, // 4
}

// String Enums
enum enum_var_2 {
  ORANGE_COLOR,
  VAL = "ORANGE_COLOR",
}

// Reverse Mapping
console.log(enum_var_2["VAL"]);
console.log(enum_var_2[0]);

/**
 *
 * Union
 *
 */

let union: string | number;

union = 1;
union = "abc";
console.log(union);

/**
 *
 * Any
 *
 */

let some_value: any = "ABC123";

some_value = null;
some_value = 123;
console.log(some_value);

/**
 *
 * Void
 *
 */

function call_it(): void {
  /** Do something */
}

/**
 *
 * Never: can't have a reachable end, e.g
 *
 * values would never occur like function will always through exception or would never finish like infinite loop
 *
 */

function throw_exception(): never {
  throw new Error("Oops");
}

function infinite(): never {
  while (true) {
    // do something
  }
}
