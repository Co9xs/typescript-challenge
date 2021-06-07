// 先頭の文字を配列に追加して再帰的に呼び出す、最終的に""になったら配列の長さを返す
type LengthOfString<S extends string, A extends string[] = []> = S extends "" 
? A['length']
: S extends `${infer l}${infer r}`
? LengthOfString<r, [...A, l]>
: never;