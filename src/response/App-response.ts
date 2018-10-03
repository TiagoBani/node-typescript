import { Usuario } from "../models/usuario";

export class AppResponse {
    private usuarios: Usuario[] = []
    responseJson(obj:{Request, Response}, method: string){
        //Pega o metodo http feito e chama a função correspondente
        //return Object.keys(obj.Request.params).length > 0 ? this.getOnly(obj) : this[method.toLowerCase()](obj)
        return this[method.toLowerCase()](obj)
    }
    get(obj:{Request, Response}) {
        //apenas os registros filstrados
        if(obj.Request.params.name != null){
            return {
                usuarios: this.usuarios.filter(e => e.getName() === obj.Request.params.name),
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
        this.usuarios.push(new Usuario(obj.Request.body.nome))
        return {
            usuarios: this.usuarios,
            message: 'Insert requisitado'
        }
    }
    put(obj:{Request, Response}) {
        this.usuarios = this.usuarios.filter(e => e.getName() === obj.Request.body.nome)
        return {
            usuarios:this.usuarios,
            message: 'Update requisitado'
        }
    }
    delete(obj:{Request, Response}) {
        this.usuarios = this.usuarios.filter(e => e.getName() !== obj.Request.body.nome)
        return {
            usuarios: this.usuarios,
            message: 'Delete requisitado'
        }
    }
}