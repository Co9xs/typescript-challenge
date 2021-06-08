type TupleToUnion<T extends unknown[]> = T[number]

// 配列を定義、最終的にはtupleをunionに変換、先頭の文字から配列に追加していってSがなくなって呼び出されたら配列をUnionに変換
type StringToUnion<S extends string, A extends any[] = []> = S extends "" 
  ? TupleToUnion<A>
  : S extends `${infer L}${infer R}`
  ? StringToUnion<R, [...A, L]>
  : never
