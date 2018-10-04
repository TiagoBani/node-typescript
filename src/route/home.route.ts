import * as express from 'express';

import { Usuario } from "../models/usuario";

export class HomeRoute {
    private usuarios: Usuario[] = []

    constructor(
        private express: any,
        private router: express.Router
    ){
        this.route()
    }
    route(){
        this.router.all('/:id?', (req, res) => {
            const response = this.responseJson(
                { Request:req, Response:res }, 
                req.method 
                )
            res.status(!response.status ? 200: response.status).json(response)
        })
        this.express.use('/', this.router)
    }

    responseJson(obj:{Request, Response}, method: string){
        //Pega o metodo http feito e chama a função correspondente, caso não exista retorna erro
        return this[method.toLowerCase()] ? this[method.toLowerCase()](obj): {
            status: 404,
            message: `Method ${method} not implemented`
        }
    }
    get(obj:{Request, Response}) {
        //apenas os registros filstrados
        if(obj.Request.params.id != null){
            return {
                usuarios: this.usuarios.filter(e => e.getId() === Number.parseInt(obj.Request.params.id)),
                message: 'Select com where'
            }
        }
        //todos os registros
        return {
            usuarios: this.usuarios,
            message: 'Select sem where'
        }
    }
    post(obj:{Request, Response}) {
        this.usuarios.push(new Usuario(this.usuarios.length,obj.Request.body.nome))
        return {
            usuarios: this.usuarios,
            message: 'Insert requisitado'
        }
    }
    put(obj:{Request, Response}) {
        this.usuarios.forEach(e => {
            if(e.getId() === Number.parseInt(obj.Request.params.id))
                e.setName(obj.Request.body.nome)
        })
        return {
            usuarios:this.usuarios,
            message: 'Update requisitado'
        }
    }
    delete(obj:{Request, Response}) {
        this.usuarios = this.usuarios.filter(e => e.getId() === Number.parseInt(obj.Request.params.id))
        return {
            usuarios: this.usuarios,
            message: 'Delete requisitado'
        }
    }
}