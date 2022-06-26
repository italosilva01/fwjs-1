import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    &  div{
        display: flex;
        justify-content: end;
        gap: 5px;
        
    }
    

    input,textarea {
        width: 400px;
    }
`