
import Cabecalho from "../../components/cabecalho/conteudo.js"
import  Menu  from "../../components/menu/Conteudo.js"
import {Container} from './conteudo-styled.js'

import Inputs from '../../components/inputs/index.js'

export default function conteudo() {
    return (
      <Container>
            <Menu/>
          <div className="pt2-home">
            <Cabecalho/>
            <div className="info-alunos"> 
              <div className="nome-aluno"> <img src="/assets/images/Line.svg" alt=""/> Novo Aluno </div>
              <div className="form-home"> 
                  <div className="inputs">
                    <div className="pt1"> </div>
                    <Inputs/>
                  </div>
                  <button> Cadastrar </button>
              </div>
            </div>
              <table>
                <tr>
                  <th> Id </th>
                  <th> Nome </th>
                  <th> Chamada </th>
                  <th> Turma</th>
                  <th> Curso </th>
                </tr>
                
                <tr> 
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
              </table>

          </div>
      </Container>
    )
}