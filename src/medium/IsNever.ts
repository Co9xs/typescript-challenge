type IsNever<T extends any> = T[] extends never[] ? true : false
