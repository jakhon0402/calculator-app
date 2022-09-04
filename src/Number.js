import React from 'react'
import Button from './Button'

export default function Number({children, ...props}) {
  return (
    <Button styles={"bg-zinc-500 active:bg-zinc-400"} func={props.func} keypress={props.keypress}>{children}</Button>
  )
}
