import { AbstractController } from "./shared/abstract.controller";
import { iPersistent } from "../models/shared/iPersistent";
import { iHttp } from "../shared/iHttp";

export class HomeController extends AbstractController implements iPersistent{

    protected obj: iHttp

    home(){
        this.sendReturn({message:'Welcome'})
    }
}