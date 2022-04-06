import { useState } from "react";
import { Aba } from "./Aba";

interface AbaContent{
    title:string;
    content:string;
}

export const AbasFather = ()=>{
const [abas,setAbas] = useState<AbaContent[]>([{title:'Tab1',content:'Texto do segundo tabl'},{title:'Tab2',content:'Texto do segundo tab2'},{title:'Tab3',content:'Texto do segundo tab3'},{title:'Tab4',content:'Texto do segundo tab4'}] )

const Abas = abas.map((item)=><Aba text={item.title}/>)
    return (

        <div>
           <div className="container-aba">
           {Abas}
           </div> 
        </div>
    );

};