type IsUnion<T, B = T> = T extends T 
  ? [Exclude<B, T>] extends [never] 
    ? false 
    : true 
  : never;