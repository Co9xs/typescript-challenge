type X = Promise<string>
type Y = Promise<{ field: number }>

type Awaited<T extends Promise<any>> = T extends Promise<infer R> ? R : never

let resultX: Awaited<X>
let resultY: Awaited<Y>