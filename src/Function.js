import React from 'react'
import Button from './Button'


export default function Function({children, ...props}) {
  return (
    <Button styles={"bg-zinc-600 active:bg-zinc-500"} func={props.func}>{children}</Button>
  )
}
