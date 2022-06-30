import React, {createContext, ReactNode, useContext, useState} from 'react'

interface StateProps {
    title:string;
    content:string;
}

type PropsUserContext = {
    state: StateProps[];
    setState: React.Dispatch<React.SetStateAction<StateProps[]>>;
}

interface StateProviderProps {
    children:ReactNode;
}

export const StateContext = createContext<PropsUserContext>({ state:[] as StateProps[],} as PropsUserContext);

export const StateProvider = ({children}:StateProviderProps)=>{

    const [state,setState] = useState<StateProps[]>([] as StateProps[])
    
    return(
        <StateContext.Provider
            value={{state,setState}}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ()=>{
    const context = useContext(StateContext);

    return context
}