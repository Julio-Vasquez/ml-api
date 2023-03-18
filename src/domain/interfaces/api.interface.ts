export interface IQuery {
    url: string
    params?: any
}

export interface IMutation extends IQuery {
    method: 'delete' | 'get' | 'patch' | 'post' | 'put'
    body: any
}
