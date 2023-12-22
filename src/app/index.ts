type Props = {
  id: string
  name: string
  age: number
}

type Filter<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never
}[keyof T]

type StringKeys = Filter<Props, string>
type NumberKeys = Filter<Props, number>

const foo = (id: string, name: string) => {
  return ''
}

type Foo = ReturnType<typeof foo>
