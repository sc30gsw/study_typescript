type User<T> = {
  name: string
  state: T
}

type Japanese = User<'東京都' | '大阪府'>
type American = User<'CA' | ' NY'>

const user1: Japanese = {
  name: '田中',
  state: '東京都',
}

const user2: American = {
  name: 'john',
  state: 'CA',
}

type Foo<T extends string | boolean = string> = {
  value: T
}

const foo: Foo = {
  value: 'foo',
}

const foo1: Foo<string> = {
  value: 'hoge',
}

const foo2: Foo<boolean> = {
  value: false,
}

const foo3: Foo<'bar'> = {
  value: 'bar',
}
