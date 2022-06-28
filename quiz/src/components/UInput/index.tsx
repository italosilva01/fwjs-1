import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { ContainerInput, SpanStyled } from './style'

interface Props {
    name:string
}

type InputProps = JSX.IntrinsicElements['input']&Props
  
export const UInput= ({ name , ...rest }:InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, registerField,error } = useField(name)

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
    <ContainerInput>
    <input
      name={name}
      ref={inputRef}
      type="text"
      defaultValue={defaultValue}
      {...rest}
    />

    {error && (<SpanStyled>É necessário informar o título da aba</SpanStyled>)}
    </ContainerInput>
  )
}

