type LeftTrim<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}` ? LeftTrim<R> : S;
type RightTrim<S extends string> = S extends `${infer R}${' ' | '\n' | '\t'}` ? RightTrim<R> : S;

type Trim<S extends string> = LeftTrim<RightTrim<S>>