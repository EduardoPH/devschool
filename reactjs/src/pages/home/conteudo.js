

import Cabecalho from "../../components/cabecalho/conteudo.js"
import  Menu  from "../../components/menu/Conteudo.js"
import {Container} from './conteudo-styled.js'

export default function conteudo() {
    return (
      <Container>
            <Menu/>
          <div className="pt2">
            <Cabecalho/>
          </div>
      </Container>
    )
}