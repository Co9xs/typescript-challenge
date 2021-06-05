type MyExclude<T, U> = T extends U ? never : T

type T1 = MyExclude<"a" | "b" | "c", "b">
// "a" extends "b" ? never : "a" | "b" extends "b" ? never : "b" | "c" extends "b" ? never : "c" → "a" | never | "c" → "a" | "c"

// union distribution