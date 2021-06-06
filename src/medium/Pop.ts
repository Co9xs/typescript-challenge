type Pop<T extends any[]> = T extends [...infer notLast, infer last] ? [...notLast] : never
