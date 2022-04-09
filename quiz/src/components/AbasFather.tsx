import { useEffect, useState } from "react";
import { Aba } from "./Aba";

interface AbaContent{
    title:string;
    content:string;
}

export const AbasFather = ()=>{
const abas = [{title:'Tab1',content:'Texto do  tab1'},{title:'Tab2',content:'Texto do  tab2'},{title:'Tab3',content:'Texto do tab3'},{title:'Tab4',content:'Texto do tab4'}] ;

const [currentAba,setCurrentAba] = useState<number>(0);

const Abas = abas.map((item,index)=><Aba key={index} text={item.title} position={index} setCurrentAba={setCurrentAba}/>)

useEffect(()=>{

    console.log(currentAba)
},[currentAba])
    return (

        <div className="body">
           <div className="container-aba">
           {Abas}
           </div> 
           <div className="content">
            <h3>{abas[currentAba].content}</h3>
           </div>
        </div>
    );

};