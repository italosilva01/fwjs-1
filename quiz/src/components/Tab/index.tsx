
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import {  Fragment, useEffect, useRef, useState } from 'react'

import { CatchInfo } from "./CatchInfo"
import { BoxContainerTab, Content, ContentBodyTabs, NumTabs, TitleComponent } from "./style"



export const Tab = ()=>{
    const formRef = useRef<FormHandles>(null)

    const [countTabs,setCountTabs ] = useState<number>(0)
    const [countElementArray,setCountElementArray] = useState<number[]>([] as number[]);
    
    useEffect(()=>{
        let NewArray = []

        for (let index = 0; index < countTabs; index++) {
            NewArray.push(index);
        }

        setCountElementArray(NewArray);
    },[countTabs])

    const handleSubmit = (data:any)=>{
        console.log('TESTE')
        console.log(data)
        
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
            {countElementArray.map(()=> <CatchInfo/>)}
            
        </ContentBodyTabs>
        <Content>
        <button>Salvar</button>

        </Content>

        </BoxContainerTab>
        </Form>
    )
}