namespace utilityTypes {
  // Awaited Type - use to define type of await in async functions.
  const loadCartItems = (): Promise<Array<object>> => {
    return new Promise((resolve) => resolve([{}]));
  };

  const onCartLoad = async () => {
    var cartItems: Awaited<ReturnType<typeof loadCartItems>> =
      await loadCartItems();
    console.log(cartItems);

    var cartItems: Awaited<Promise<Array<object>>>;
    console.log(cartItems);
  };

  onCartLoad();

  // Partial Type - makes all the properties of a type optional.
  interface Person {
    id: number;
    name: string;
    age: number;
  }

  const person: Person = {
    id: 1,
    name: "Junaid Javed",
    age: 21,
  };

  const patchPerson = (patch: Partial<Person>) => {
    return { ...person, ...patch };
  };

  const patchedPerson = patchPerson({ name: "Junaid Awan" });
  console.log(patchedPerson);

  // Required Type - opposite of Partial, make all the properties of a type required
  const updatePerson = (person: Required<Person>) => {
    return person;
  };

  const updatedPerson = updatePerson({ ...person, name: "Junaid Khan" });
  console.log(updatedPerson);

  // Readonly (like Object.freeze in JS) - make all the properties unable to reassign.
  interface Todo_0 {
    title: string;
  }

  const todo_0: Readonly<Todo_0> = {
    title: "Delete inactive users",
  };
  console.log(todo_0);
  // todo.title = "Hello"; // Error: can't reassign

  // Record Type -  it's a shortcut to defining an object type with a specific key type and value type.
  const tools = {
    GatsBy: {
      creator: "xyz",
    },
    "Digital Ocean": {
      creator: "abc",
    },
  };

  type allowedKeys = keyof typeof tools;
  type valuesType = typeof tools.GatsBy;

  let tool: Partial<Record<allowedKeys, valuesType>>;

  tool = {
    GatsBy: {
      creator: "abc123",
    },
  };
  console.log(tool);

  //   Partial - select properties from an existing type
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type TodoPreview = Pick<Todo, "title" | "completed">;

  const todo_1: TodoPreview = {
    title: "Clean room",
    completed: false,
  };
  console.log(todo_1);

  //   Omit - opposite of Pick
  type TodoInfo = Omit<Todo, "completed" | "createdAt">;

  const todoInfo: TodoInfo = {
    title: "Pick up kids",
    description: "Kindergarten closes at 5pm",
  };

  console.log(todoInfo);
}
