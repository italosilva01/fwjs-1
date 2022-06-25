import { CatchInfo } from "./CatchInfo"
import { BoxContainerTab, Content, NumTabs, TitleComponent } from "./style"

export const Tab = ()=>{

    return(
        <BoxContainerTab>
        <TitleComponent>Tabs</TitleComponent>
        <Content>
        <NumTabs>
            <label htmlFor="numTabs">Núm.tabs</label> <input type="number" name="numTabs"/>
        </NumTabs>
        </Content>
        <hr></hr>
        <Content>
           <CatchInfo/>
        </Content>

        </BoxContainerTab>
    )
}