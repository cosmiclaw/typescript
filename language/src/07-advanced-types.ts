// unknown Type

// Type Guards

// User Defined Type Guards with Predicates

// Using in Operator

// Using keyof Operator

// Intersection Type

// Type Aliases

// Non-null assertion operator - The exclamation mark(!) is a “non-null assertion operator” that is used to “remove null and undefined values in TypeScript”. By using the “! operator”, you're telling TypeScript to trust that the value is present, and it should not raise a type error. It's a way of overriding TypeScript's strict null checks.

interface My_Type {
  value: string;
}

type new_var = My_Type | undefined;

const obj = (): new_var => {
  const condition = true;
  if (condition) {
    return {
      value: "ABC",
    };
  } else {
    return undefined;
  }
};

const { value } = obj()!; // removing this would give type error
