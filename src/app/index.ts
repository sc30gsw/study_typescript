import type { PartialDeep } from 'type-fest'

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

type User = {
  name: string
  age: number | null
  country?: 'US' | 'UK' | 'JP'
}

type ReadonlyUser = Readonly<User>

type PartialUser = Partial<User>

type RequiredUser = Required<User>

type PickUser = Pick<User, 'name' | 'country'>

type OmitUser = Omit<User, 'age'>

const user: OmitUser = {
  name: 'foo',
  country: 'JP',
}

type Bar = Extract<string | number, string>
type Baz = Exclude<string | number, number>

type Fizz = NonNullable<string | null | undefined | boolean>

type RecordType = Record<string, number>
const obj: RecordType = {
  name: 0,
  hoge: 1,
}

const bar = (a: string, b: number) => {
  return
}
type ParametersType = Parameters<typeof bar>

type DeepUser = {
  name: string
  age: number
  address: {
    country: 'UK' | 'JP' | 'UK'
  }
}

type PartialDeepUser = PartialDeep<DeepUser>

const deepUser: PartialDeepUser = {
  name: 'user1',
  address: {},
}

declare namespace MyNamespace {
  type User = {
    name: string
    age: number | null
    country?: 'US' | 'UK' | 'JP'
  }
}

type NamespaceFoo = MyNamespace.User

declare var x: number
x = 0
