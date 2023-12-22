const foo = <T>(arg: T) => {
  return { value: arg }
}

const foo1 = foo<number[]>([1, 2, 3])
const foo2 = foo<{ foo: string[] }>({ foo: ['0', '1'] })
