import { Query } from './../utils/api/fetch.util'
import { HttpStatus } from '../../@common/enums/status.enum'
import { IResponse } from '../interfaces/response.interface'
import { IResponseItem } from '../interfaces/Item.interface'

class ItemService {
    public async getItems(params?: Object): Promise<IResponse<IResponseItem[]>> {
        const data = await Query({ url: '/sites/MLA/search', params })

        return {
            status: 'success',
            statusCode: HttpStatus.OK,
            payload: data.data,
        }
    }

    public async getItemById(id: string): Promise<IResponse<IResponseItem>> {
        const data = await Promise.all([
            await Query({ url: `items/${id}` }),
            await Query({ url: `items/${id}/description` }),
        ])

        return {
            status: 'success',
            statusCode: HttpStatus.OK,
            payload: { ...data[0].data, ...data[1].data },
        }
    }
}

export default new ItemService()
