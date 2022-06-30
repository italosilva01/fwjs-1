
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import {   useEffect, useRef, useState } from 'react'
import * as Yup from 'yup';
import { RequiredStringSchema } from 'yup/lib/string';
import { AnyObject } from 'yup/lib/types';
import { useStateContext } from '../../contexts/contexto';

import { CatchInfo } from "./CatchInfo"
import { BoxContainerTab, Content, ContentBodyTabs, NumTabs, TitleComponent } from "./style"



export const Tab = ()=>{
    const formRef = useRef<FormHandles>(null)

    const [countTabs,setCountTabs ] = useState<number>(0)
    const [countElementArray,setCountElementArray] = useState<number[]>([] as number[]);

    const {state,setState} = useStateContext()

    
    useEffect(()=>{
        let NewArray = []

        for (let index = 0; index < countTabs; index++) {
            NewArray.push(index);
        }

        setCountElementArray(NewArray);
    },[countTabs])

    const makeObjectShape = (object: Record<string, any>) => {
        const newObject: { [key: string]: RequiredStringSchema<string | undefined, AnyObject> } = {};
  
        Object.keys(object).forEach((key) => {
  
          newObject[key] = Yup.string().required('obrigatório');
        });
  
        return newObject;
      };

      

    const handleSubmit = async (data:any)=>{
        try {
            const object = makeObjectShape(data);
            const schema = Yup.object().shape(object);


            await schema.validate(data, {
              abortEarly: false,
            });
            // Validation passed
            const newState:any[] = []
            for (let index = 0; index < countTabs; index++) {

              newState.push({title:data[`titleField${index}`],content:data[`ContentField${index}`]})
            }

            setState(newState)

          } catch (err) {
            const validationErrors:any = {};

             if (err instanceof Yup.ValidationError) {

              err.inner.forEach((error:any) => {
                validationErrors[error.path] = error.message;
              });  
              formRef.current?.setErrors(validationErrors);

            }
          }
        
    }
    return(
        <Form ref={formRef} onSubmit={handleSubmit}>    
        <BoxContainerTab>
        <TitleComponent>Tabs</TitleComponent>
        <Content>
        <NumTabs>
            <label htmlFor="numTabs">Núm.tabs</label> <input type={'number'} value={countTabs} onChange={(e)=>setCountTabs(Number(e.currentTarget.value))
            }  name="numTabs" />
        </NumTabs>
        </Content>
        <hr></hr>
        <ContentBodyTabs>
            {countElementArray.map((item,index)=> <CatchInfo key={index} nameTitle={`titleField${item}`} nameTextArea={`ContentField${item}`}/>)}
            
        </ContentBodyTabs>
        <Content>
        <button>Salvar</button>

        </Content>

        </BoxContainerTab>
        </Form>
    )
}