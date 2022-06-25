import styled from 'styled-components';

export const BoxContainerTab = styled.div`
    width: 550px;
    padding: 24px;

    background-color: #ffffff;

    box-shadow: 0px 6px 12px rgba(0,0,0,0.12);
    border-radius: 4px;

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
    border: 1px solid red;
    margin-left: auto;
    margin-right: auto;
    

    display: flex;
    justify-content: end;

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