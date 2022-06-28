import { useEffect,useRef } from "react";
import { useField } from "@unform/core";
import { ContainerInput, SpanStyled } from "./style";

interface Props {
    name:string
}

type TextAreaProps = JSX.IntrinsicElements['textarea']&Props

export const UTextArea = ({ name,...rest}:TextAreaProps) =>{
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const { fieldName, defaultValue, registerField,error } = useField(name)
    useEffect(() => {
        registerField({
          name: fieldName,
          ref: textAreaRef,
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
      
      return(
        <ContainerInput>
        <textarea
        name={name}
        ref={textAreaRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && (<SpanStyled>É necessário informar o conteudo da aba</SpanStyled>)}
      </ContainerInput>
      )

}