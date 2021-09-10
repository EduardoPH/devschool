import db from './db.js';
import express from 'express'
import cors from 'cors'


const app = express();
app.use(cors())
app.use(express.json())

app.get('/matricula', async (req, resp) => {
    try{
        let r = await db.tb_matricula.findAll()
        resp.send(r)
    }   catch (e){
        resp.send({error: e.tString()})
    }
})


app.post('/matricula', async (req, resp) => {

    try{
        let {aluno, turma, curso, chamada} = req.body;

        let r = await db.tb_matricula.create({
            nm_aluno: aluno,
            nm_curso: curso,
            nr_chamada: chamada,
            nm_turma: turma
        })

        resp.sendStatus(200)
    }   catch (e){
        resp.send({error: e.tString()})
    }
})

app.put('/matricula/:id', async (req, resp) => {
    let {aluno, turma, curso, chamada} = req.body; 

    let r = await db.tb_matricula.update({
        nm_aluno: aluno,
        nm_curso: curso,
        nr_chamada: chamada,
        nm_turma: turma
        }, 

        {where: {id_matricula: req.params.id}}
    )

    resp.sendStatus(200)
})






app.listen(process.env.PORT,
    x => console.log(`A PORT ${process.env.PORT} subiu!! :)`))