import type { FC } from 'react'

declare module 'react' {
  const bar: number
  type CFC<P = {}> = FC<P & { className?: string }>
}
