import React from 'react'
import Button from './Button'

export default function Operator({children, ...props}) {
  return (
    <Button styles={"bg-amber-500 active:bg-amber-600"} func={props.func}>{children}</Button>
  )
}
