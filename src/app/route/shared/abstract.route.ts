import * as express from 'express';
export abstract class AbstractRoute {

    constructor(
        protected express: any,
        protected router: express.Router,
        protected resource: string
    ){
        this.route(resource)
        this.express.use(`/${resource}/`, this.router)
    }
    protected route(resource){}
    
    protected responseJson(obj:{Request, Response}, method: string){
        //Pega o metodo http feito e chama a função correspondente, caso não exista retorna erro
        return this[method.toLowerCase()] ? this[method.toLowerCase()](obj,this.express): {
            status: 404,
            message: `Method ${method} not implemented`
        }
    }
}