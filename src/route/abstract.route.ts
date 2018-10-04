import * as express from 'express';
export abstract class AbstractRoute {

    constructor(
        protected express: any,
        protected router: express.Router,
        protected resource: string
    ){
        this.route(resource)
    }
    protected route(resource: string): void {
        console.log(resource)
        this.router.all(`/${resource}/:id?`, (req, res) => {
            const response = this.responseJson({ Request:req, Response:res }, req.method)
            res.status(!response.status ? 200: response.status).json(response)
        })
        this.express.use(`/${resource}/`, this.router)
    }
    
    protected responseJson(obj:{Request, Response}, method: string){
        //Pega o metodo http feito e chama a função correspondente, caso não exista retorna erro
        return this[method.toLowerCase()] ? this[method.toLowerCase()](obj): {
            status: 404,
            message: `Method ${method} not implemented`
        }
    }
}