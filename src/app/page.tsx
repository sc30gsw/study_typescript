let obj1: Record<string, unknown> = {}
let obj2: { [key: string]: unknown } = {}

let obj3: Record<string, number> = { a: 1, b: 2 }
let obj4: { [key: number]: string; foo: 'foo' } = {
  1: 'hoge',
  2: 'foo',
  foo: 'foo',
}

const Home = () => {
  return <div>test</div>
}

export default Home
