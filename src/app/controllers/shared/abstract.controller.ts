import { iPersistent } from "../../models/shared/iPersistent";
import { iHttp } from "../../shared/iHttp";

import { validationResult } from "express-validator/check";

export abstract class AbstractController implements iPersistent{

    protected dao: any
    protected obj: iHttp
    protected data: any
    protected validateValue: string

    constructor(
        obj: iHttp
    ){ 
        this.obj = obj
        if( ['GET','DELETE'].indexOf(this.obj.Request.method) < 0 )
            this.validate(obj)
        this.prepare()
    }
    select(){
        this.dao.select(this.obj.Request.params.id, (error, res ) => {
            if(error)
                this.sendReturn({error: error, message: 'Select requested with error'}, 500)
            this.sendReturn({tournaments: res,message: 'Select requested'})
        })
    }
    prepareInsert(){
        this.dao.select(this.obj.Request.params.id,(error, res ) => {
            if(error)
                this.sendReturn({error: error, message: 'Select requested with error'}, 500)
            this.data = this.validateData(this.data, res, this.validateValue)
            this.completeInsert()
        })
    }
    protected completeInsert(){
        if(this.data.length > 0){
            this.dao.insert(this.data, (error, res ) => {
                if(error)
                    this.sendReturn({error: error, message: 'Insert requested with error'},500 )
                this.sendReturn({tournaments: res['affectedRows'], message: 'Insert requested'})
            })
        }else{
            this.sendReturn({sended: Object.keys(this.obj.Request.body),
                message: 'Select requested, but nothing has been modified'}, 200)
        }
    }
    insert(){
        this.dao.insert(this.data, (error, res ) => {
            if(error)
                this.sendReturn({error: error, message: 'Insert requested with error'}, 500)
            this.sendReturn({tournaments: res['affectedRows'], message: 'Insert requested'})
        })
    }  
    update(){
        this.dao.update(this.obj.Request.body, this.obj.Request.params.id, (error, res ) => {
            if(error)
                this.sendReturn({error: error, message: 'Update requested with error'}, 500)
            this.sendReturn({tournaments: res['affectedRows'], message: 'Update requested'})
        })
    }
    delete(){
        this.dao.delete(this.obj.Request.params.id, (error, res) => {
            if(error)
                this.sendReturn({error: error, message: 'Delete requested with error'}, 500)
            this.sendReturn({tournaments: res['affectedRows'], message: 'Delete requested'})
        })
    }
    deleteAll(){
        this.dao.deleteAll(this.data, (error, res ) => {
            if(error)
                this.sendReturn({error: error, message: 'Delete requested with error'}, 500)
            this.sendReturn({tournaments: res['affectedRows'], message: 'Delete requested'})
        })
    }
    protected validateData(data, validate, field:string){
        for (let i = 0; i < validate.length; i++) {
            data = data.filter(value => value[field] != validate[i][field])
        }
        return data
    }
    protected prepare(){
        this.obj.Request.params.id = Number(this.obj.Request.params.id)
        this.data = this.obj.Request.body
    }
    protected validate(obj: iHttp){
        const empty = validationResult(this.obj.Response).isEmpty()
        if(!empty)
            return this.sendReturn({ errors: validationResult(empty).array() }, 422)
    }
    protected sendReturn(body: any, code: number = 200){
        return this.obj.Response.status(code).json(body)
    }
}