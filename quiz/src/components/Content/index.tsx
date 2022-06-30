import { useStateContext } from "../../contexts/contexto"
import { AbasFather } from "../AbasFather"

export const Content = ()=>{
    const {state} = useStateContext()
    return (<div>
        <h1>Teste</h1>
        
        <AbasFather abas={state}/>

    </div>)
}