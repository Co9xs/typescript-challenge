
type Last<T extends any[]> = T extends [...infer notLast, infer last] ? last : never;