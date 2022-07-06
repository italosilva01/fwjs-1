import { reactive } from "vue";

export interface StateType {
    title: string;
    content: string;
  }

export interface StateStore {
    state: StateType[],
    addState:(newState:StateType[]) =>void

}

export const stateStore = reactive<StateStore>({
    state:reactive<StateType[]>([{ title:'Tab',content:'Sem conteúdo'}]),

    addState(newState:StateType[]){
        this.state = newState;
    },

})