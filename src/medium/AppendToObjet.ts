type AppendToObject<T extends {}, U extends string | number | symbol, V extends any> = {
  [K in U | keyof T]: K extends keyof T ? T[K] : V
}

type test1 = {
  key: 'cat',
  value: 'green'
}

const appended: AppendToObject<test1, 'home', boolean> = {
  key: 'cat',
  value: 'green',
  home: true
}