import { iHttp } from "../../shared/iHttp";

export interface iRoute{
    get(obj:iHttp);
    post(obj:iHttp);
    put(obj:iHttp);
    delete(obj:iHttp);
}