import styled from "styled-components";

const Menu = styled.div`
    background-color: #262626 ;
    display: flex;
    flex-direction: column;

    .titulo-menu, .name-gerenciamento, .mn-alunos-menu {
        color: white;
    }

    .alunos-menu ,.gerenciamento-menu{
        display: flex;
        flex-direction: row;
        align-content: center;
    }

`

export {Menu}