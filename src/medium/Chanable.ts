type Chainable<Options = {}> = {
  // recursively append { [S in K]: V } to Options
  option<K extends string, V>(key: K, value: V): Chainable<Options & { [S in K]: V }>
  get(): Options;
}

declare const a: Chainable

export const result = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()