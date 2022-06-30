import styled from 'styled-components';

export const BoxContainerTab = styled.div`
    width: 550px;
    padding: 24px;

    background-color: #ffffff;

    box-shadow: 0px 6px 12px rgba(0,0,0,0.12);
    border-radius: 4px;

    button{
        margin-top: 10px;
        background: #7B61FF;
        border-radius: 4px;
        width: 69px;
        height: 36px;
        border: none;
        color: #ffffff;
    }

`;


export const TitleComponent = styled.h1`
    font-size: 30px;
    font-family: 'Inter';
    font-weight: 500;
    line-height: 28px;

    color: #424242;
`
export const Content = styled.div`
    width:90% ;
    margin-left: auto;
    margin-right: auto;
    

    display: flex;
    justify-content: end;
    
    button{
        &:hover{
            filter: brightness(0.8);
        }
    }
    

`

export const ContentBodyTabs = styled(Content)`
    flex-direction: column;
    gap: 10px;
`

export const NumTabs = styled.div`
    display: flex;
    label{
        margin-right: 10px;
    };
    input{
        width: 400px;
    }

`