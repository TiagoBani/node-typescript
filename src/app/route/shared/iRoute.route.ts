export interface iRoute{
    get(obj:{Request, Response});
    post(obj:{Request, Response});
    put(obj:{Request, Response});
    delete(obj:{Request, Response});
}