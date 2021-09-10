import styled from "styled-components";

const Cabecalho = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    .cb-usuario {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100vh;
    }

    .nick span {
        color: #615858;
    }


    .botoes-cabecalho button{
        align-items: center;
        padding: 1em;
        border-radius: 3em;
        border: solid 0px;
        background-color: #986CDF;
        margin: 1em;
    }
`


export {Cabecalho}