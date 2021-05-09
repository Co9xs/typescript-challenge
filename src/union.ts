interface Hoge {
  foo: number;
  bar: string;
}

interface Piyo {
  foo: number;
  baz: boolean
}

function useHogePiyo(obj: Hoge | Piyo) {
  if ('bar' in obj) {
    console.log(obj.bar)
  } else {
    console.log(obj.baz)
  }
}

interface Some<T> {
  type: 'Some';
  value: T;
}
interface None {
  type: 'None';
}

type Option<T> = Some<T> | None;

function map<T, U>(obj: Option<T>, f: (obj: T) => U): Option<U> {
  switch(obj.type) {
    case 'Some':
      return {
        type: 'Some',
        value: f(obj.value)
      }
    case 'None':
      return {
        type: 'None'
      }
  }
}