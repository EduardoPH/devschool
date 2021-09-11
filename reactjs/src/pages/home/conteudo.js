
import Cabecalho from "../../components/cabecalho/conteudo.js"
import  Menu  from "../../components/menu/Conteudo.js"
import {Container} from './conteudo-styled.js'
import Api from '../../services/api.js'
import { useEffect, useState } from "react"
import Inputs from '../../components/inputs/index.js'
const api = new Api();

export default function Conteudo() {

  const [alunos, setAlunos] = useState([]);

    async function listar() {
      let r = await api.listar();
      setAlunos(r)
    }

    useEffect(() => {
      listar();
    }, [])

    return (
      <Container>
            <Menu/>
          <div className="pt2-home">
            <Cabecalho/>
            <div className="info-alunos"> 
            <div className="nome-aluno"> <img src="/assets/images/Line.svg" alt=""/> <div className="novo-aluno"> Novo Aluno </div> </div>
              <div className="form-home"> 
                  <div className="inputs">
                    <div className="pt1"> </div>
                    <Inputs/>
                  </div>
                  <button className="cadastrar"> Cadastrar </button>
              </div>
            </div>
            <div className="tabela">
              <div className="novo-aluno">
                <img src="/assets/images/Line.svg"/>
                <div className="titulo-novo-aluno" > Alunos Matriculados </div>
              </div>
              <table className="tabela-ns">
                <thead>
                  <tr className="inicio-table">
                    <th> Id </th>
                    <th> Nome </th>
                    <th> Chamada </th>
                    <th> Turma</th>
                    <th> Curso </th>
                    <th> </th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {alunos.map(item => 
                  <tr> 
                    <td> {item.id_matricula} </td>
                    <td> {item.nm_aluno} </td>
                    <td> {item.nr_chamada} </td>
                    <td> {item.nm_turma}</td>
                    <td> {item.nm_curso} </td>
                  </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
      </Container>
    )
}