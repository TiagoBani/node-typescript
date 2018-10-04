import * as express from 'express';
export abstract class AbstractRoute {

    constructor(
        protected express: any,
        protected router: express.Router
    ){
        this.route()
    }
    protected route(){}
    
    protected responseJson(obj:{Request, Response}, method: string){
        //Pega o metodo http feito e chama a função correspondente, caso não exista retorna erro
        return this[method.toLowerCase()] ? this[method.toLowerCase()](obj): {
            status: 404,
            message: `Method ${method} not implemented`
        }
    }
}