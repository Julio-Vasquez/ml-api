export interface IResponse<T> {
    status: 'error' | 'success'
    message?: string
    payload?: T
    statusCode: number
}
