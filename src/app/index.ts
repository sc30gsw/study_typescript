const obj1 = {
  foo: 'foo',
  bar: 'bar',
}

const obj2: typeof obj1 = {
  foo: 'hoge',
  bar: 'fuga',
}

const double = (x: number | string) => {
  if (typeof x === 'string') return Number(x) * 2

  return x * 2
}

type Obj = {
  foo: string
  bar: string
}

type Key = keyof Obj

const key: Key = 'bar'

const obj = {
  foo: 'foo',
  bar: 'bar',
}

type KeyObj = keyof typeof obj

const keyObj: KeyObj = 'foo'
