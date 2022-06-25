import { Container } from "./style"

export const CatchInfo = ()=>{

    return(
        <Container>
            <div>
                <label htmlFor="head">Título</label>
                <input name="head" type="text"/>
            </div>
            <div>
                <label htmlFor="content">Conteúdo</label>
                <textarea name="content"/>
            </div>
        </Container>

    )
}