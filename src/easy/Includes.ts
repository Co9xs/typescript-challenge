type MyIncludes<T extends readonly any[], U> = U extends T[number] ? true : false

type Includes<T extends readonly any[], U> = "true" extends { [V in keyof T]: T[V] extends U ? "true" : false}[number] ? true : false;

type isPillarMen = MyIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>
