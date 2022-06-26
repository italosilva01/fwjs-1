import { UInput } from "../../UInput";
import { Container } from "./style"
interface CatchInfoProps {
    nameTitle:string;
    nameTextArea:string;
}
export const CatchInfo = ({nameTitle,nameTextArea}:CatchInfoProps)=>{

    return(
        <Container>
            <div>
                <label htmlFor="head">Título</label>
                <UInput name={nameTitle} type="text" />
            </div>
            <div>
                <label htmlFor="content">Conteúdo</label>
                <textarea name="content"/>
            </div>
        </Container>

    )
}