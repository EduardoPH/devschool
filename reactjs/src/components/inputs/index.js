import {inputstyle} from './styled.js'

export default function inputs_pt1() {
    return (
        <inputstyle>
            <form> 
                <label> 
                    Aluno
                    <input type="text"/>
                </label>]

                <label> 
                    Curso
                    <input type="text"/>
                </label>

                <label> 
                    Chamada
                    <input type="text"/>
                </label>

                <label> 
                    Turma
                    <input type="text"/>
                </label>
            </form>
        </inputstyle>
    )
}