type MyReadonly2<T, K extends keyof T = keyof T> = T & {
  readonly [V in K]: T[V]
}

const test: MyReadonly2<Todo1, 'title' | 'description'> = {
  title: "string",
  description: "string",
  completed: false
}

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}