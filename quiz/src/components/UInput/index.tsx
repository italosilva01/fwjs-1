import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

interface Props {
    name:string
}

type InputProps = JSX.IntrinsicElements['input']&Props
  
export const UInput= ({ name , ...rest }:InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, registerField } = useField(name)

useEffect(() => {
  registerField({
    name: fieldName,
    ref: inputRef,
    getValue: ref => {
      return ref.current.value
    },
    setValue: (ref, value) => {
      ref.current.value = value
    },
    clearValue: ref => {
      ref.current.value = ''
    },
  })
}, [fieldName, registerField])

  return (
    <input
      name={name}
      ref={inputRef}
      type="text"
      {...rest}
    />
  )
}

