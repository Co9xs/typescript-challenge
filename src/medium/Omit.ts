export type MyExclude<T, U> = T extends U ? never : T

type MyOmit<T, K extends keyof T> = {
  [V in MyExclude<keyof T, K>]: T[V]
}

const test: MyOmit<Todo, 'description'> = {
  "title": "string",
  "completed": true
}

interface Todo {
  title: string
  description: string
  completed: boolean
}