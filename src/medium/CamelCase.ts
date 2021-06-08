type CamelCase<S extends string> = S extends `${infer A}-${infer B}${infer C}` ? B extends Uppercase<B> ? `${A}-${CamelCase<`${B}${C}`>}` : `${A}${Uppercase<B>}${CamelCase<C>}` : S; 
