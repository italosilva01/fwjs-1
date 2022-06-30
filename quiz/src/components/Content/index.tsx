import { StateProps, useStateContext } from "../../contexts/contexto"
import { AbasFather } from "../AbasFather"
import { ContainerContent } from "./style"

export const Content = ()=>{
    const {state} = useStateContext()
    return (<ContainerContent>
        <h1>Conteúdo</h1>
        {state.length > 0 &&<AbasFather abas={state}/>}

    </ContainerContent>)
}