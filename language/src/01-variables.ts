/**
 *
 * Variables
 *
 */

// var variables can be updated and re-declared within its scope;
// let variables can be updated but not re-declared;
// const variables can neither be updated nor re-declared

/** var: can be accessed before declaration */
// console.log(var_title); // would print undefined
var var_title = "abc123";
console.log(var_title);
var_title = "xyz123";
console.log(var_title);
var var_title = "re_declared";
console.log(var_title);

/** let: Blocked Scope (can be re-declared in another block scope but not in the same block) */

let let_title = "abc123";
console.log(let_title);
let_title = "xyz123";
console.log(let_title);
// let let_title = "re_declared" // would throw Error

/** const: Blocked Scope (can't be re-assigned to another value) */
const const_title = "abc123";
console.log(const_title);
