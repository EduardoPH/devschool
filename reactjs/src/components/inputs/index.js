import {Inputstyle} from './styled.js'

export default function inputs_pt1() {
    return (
        <Inputstyle>
            <form> 
            <div className="pt-inputs">
                <label> 
                    Aluno:
                    <input type="text"/>
                </label>

                <label> 
                    Curso:
                    <input type="text"/>
                </label>
            </div>

                <div className="pt-inputs">
                    <label> 
                        Chamada:
                        <input type="text"/>
                    </label>

                    <label> 
                        Turma
                        <input type="text"/>
                    </label>
                </div>
            </form>
        </Inputstyle>
    )
}