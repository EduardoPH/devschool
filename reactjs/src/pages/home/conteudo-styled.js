import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #f5f5f5;

    .form-home {
        background-color: #ffffff;
        margin: 2em;
        padding: 2em;
        display: flex;
        flex-direction: row;
    }

    .cadastrar {
        height: 2em;
        align-self: flex-end;
        margin-bottom: 2em;
    }
    
    .info-alunos {
        display: flex;
        flex-direction: row;
        background-color: #ffffff;
        margin: 2em;
        padding: 2em;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
    }

    .nome-aluno {
        align-self: flex-start;
        display: flex;
        flex-direction: row;
    }

    .novo-aluno{
        font: 500 2em Roboto;
        margin: 0.1em 0.7em;
        display: flex;
        flex-direction: row;

    }


    .titulo-novo-aluno {
        margin: 0em 1em;
        font: 500 1.1em Roboto;
    }

    .nome-aluno img {
        height: 3em;
    }

    .novo-aluno img {
        height: 1.2em;
        margin: ;
    }

    .cadastrar {
        border-radius: 44px;
        background-color: #E911C6;
        color: white;
        border: solid;
        height: 2.8em;
        width: 8em;
    }

    th, td {
       padding: 1em;
    }

    .tabela-ns {
        margin-left: 2em;
        margin-right: 2em;

        width: calc(100% - 9em);
        border-collapse: collapse;
        text-align: left;
    }

    .tabela {
        background-color: white;
        padding: 2em;
        margin: 2em;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);

        max-height: 300px;
        overflow: hidden;
        overflow-y: scroll;
        height: 2500px;
    }
    
    .inicio-table {
        align-items: center;
        justify-content: space-between;

        background-color: #986CDF;
        color: white;
    }



`

export {Container}