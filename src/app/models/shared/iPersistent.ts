export interface iPersistent {
    select(data, callback)
    insert(data, callback)
    update(data, where, callback)
    delete(data, callback)
}