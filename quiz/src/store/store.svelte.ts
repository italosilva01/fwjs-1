import { writable } from "svelte/store";

export interface StateType {
    title:string,
    content:string
}

export interface StateStore {
    state: StateType[],
    addState: (newState:StateType[])=>void
}

 const stateStore= writable([] as StateType[]);

 export default function AddState (newState:StateType[]){
    stateStore.set(newState)

 }
