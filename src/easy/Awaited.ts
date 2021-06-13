type X = Promise<string>
type Y = Promise<{ field: number }>

type Awaited<T extends Promise<any>> = T extends Promise<infer R> ? R : never

let resultX: Awaited<X>
let resultY: Awaited<Y>

type Awaited2<T extends Promise<unknown>> = T extends Promise<infer R> ? R : never


let resultX2: Awaited2<X>
let resultY2: Awaited2<Y>