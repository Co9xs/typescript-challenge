declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
  [V in keyof T]: T[V] extends Promise<infer I> ? I : T[V]
}>