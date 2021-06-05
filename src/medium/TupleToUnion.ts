type TupleToUnion<T extends unknown[]> = T[number]

export const test: TupleToUnion<[123, "456", true]> = true