import React from 'react'

export default function Button({children, ...props}) {
 
  return (
    <button  className={"text-3xl font-thin text-white "+props.styles} onClick={props.func}>{children}</button>
  )
}
