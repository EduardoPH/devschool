import { Menu } from "./styled";

export default function MenuDev() {
    return(
        <Menu>
            <div className="titulo-menu"> 
                <img src="/assets/images/book.svg"/>
                <div className="titulo-menu"> Dev School</div>
            </div>

            <div className="space-menu"> </div>

            <div className="gerenciamento-menu"> 
                <div className="name-gerenciamento"> Gerenciamento </div> 
                <img src="/assets/images/Vector.svg"/>
            </div>
            <div className="alunos-menu">
                <img className="nm-alunos-barrinha" src="/assets/images/Barrinha.svg"/>
                <div className="mn-alunos-menu"> Alunos </div>
            </div>
        </Menu>
    )
}