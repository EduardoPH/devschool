import axios from 'axios'

const api = new axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    async listar(){
        let r = await api.get('/matricula');
        return r.data;
    }
}