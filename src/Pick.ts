interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

export const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}

type MyPick<T, K extends keyof T> = {
  [V in K]: T[V]
}