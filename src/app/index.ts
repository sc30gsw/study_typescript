const isString = (arg: string | number): arg is string => {
  return typeof arg === 'string'
}

const foo = <T extends string | number>(arg: T) => {
  if (isString(arg)) {
    return { value: arg.toUpperCase() }
  }

  return { value: arg.toFixed() }
}

// const foo1 = foo<number[]>([1, 2, 3])
// const foo2 = foo<{ foo: string[] }>({ foo: ['0', '1'] })
const foo1 = foo('hoge')
