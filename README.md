# Key JavaScript/TypeScript/React/Node Terms

### 1 -  Side Effect
**Side Effect** is not a react-specific term. It is a general concept about behaviors of functions. A function is said to have side effect if it try to modify anything outside its body. **For example**, if it modify a global variable, then it is a side effect. If it makes a network call, it is a side effect as well.

### 2 - Tree Shaking
Tree shaking is a technique that removes unused code from JavaScript bundles, making them smaller and faster to load. e.g, unused variables, functions etc

### 3 - Type Inference
TypeScript infers types of variables when there is no explicit information available in the form of type annotations.

Types are inferred by TypeScript compiler when:
- Variables are initialized
- Default values are set for parameters
- Function return types are determined

### 4 - Type Assertion
Type assertion allows to set the type of a value and tell the compiler not to infer it. This is when a programmer might have a better understanding of the type of a variable than what TypeScript can infer on its own. it's similar to type casting in other languages.
> Problem
```typescript
let employee = { };

employee.name = "John"; //Compiler Error: Property 'name' does not exist on type '{}'
employee.code = 123; //Compiler Error: Property 'code' does not exist on type '{}'
```
> Solution
```typescript
interface Employee { 
  name: string; 
  code: number; 
} 

let employee = <Employee> { }; 
employee.name = "John"; // OK
employee.code = 123; // OK
```

### 5 - 
