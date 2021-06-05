interface Todo {
  title: string
  description: string
}

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

export const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

// todo.title = "Hello" Error
// todo.description = "barFoo" Error
