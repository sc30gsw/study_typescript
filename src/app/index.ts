const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key]
}

const setProperty = <T, K extends keyof T>(obj: T, key: K, value: T[K]) => {
  obj[key] = value
}

const obj = {
  foo: 1,
  bar: 2,
  baz: 3,
}

getProperty(obj, 'bar')
setProperty(obj, 'bar', 100)
