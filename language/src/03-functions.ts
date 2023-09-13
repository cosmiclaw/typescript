// Named Function
function func_1(a: string, b: number): void {}

// Anonymous Function (optional Parameter)
const func_2 = function (x: string, y?: string): void {};

// Arrow Function (default value)
const func_3 = (a: string = "A"): void => {};

// Function Overloading
function sum(a: number, b: number): number;
function sum(a: string, b: string): string;
function sum(a: any, b: any): any {
  return a + b;
}

const result = sum("123", "xyz");
console.log(result);

// Rest Parameters
function func_4(...args: number[]): number {
  return args.reduce((prev, cur) => prev + cur, 0);
}

console.log(func_4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
