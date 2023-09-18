namespace AdvancedTypes {
  // unknown Type (data fetching example)
  async function getData(path: string): Promise<unknown> {
    const response = await fetch(path);
    return await response.json();
  }

  type Person = {
    id: string;
    name: string;
  };

  // async function getPerson(id: string): Promise<Person | null> {
  //   const person = await getData("/people/1");
  //   return person; // 💥 Type 'unknown' is not assignable to type 'Person | null'.
  // }

  function isPerson(person: any): person is Person {
    return "id" in person && "name" in person;
  }

  async function getPerson(id: string): Promise<Person | null> {
    const person = await getData("/people/1");
    if (person && isPerson(person)) {
      return person; // type is narrowed to `Person`
    }
    return null;
  }
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
}
