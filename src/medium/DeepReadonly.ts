type DeepReadonly<T> = { 
  readonly [P in keyof T]: T[P] extends Record<string | number | symbol, unknown> ? DeepReadonly<T[P]> : T[P]
}