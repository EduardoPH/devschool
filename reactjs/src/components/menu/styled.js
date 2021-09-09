import styled from "styled-components";

const Menu = styled.div`
    background-color: #2B3031;
    display: flex;
    flex-direction: column;
    width: 17%;


    .titulo-menu, .name-gerenciamento, .mn-alunos-menu {
        color: white;
    }

    .alunos-menu ,.gerenciamento-menu, .titulo-menu{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .space-menu {
        height: 3em;
        background-color: #262626;
    }

`

export {Menu}