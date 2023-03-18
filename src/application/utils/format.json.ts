import { AllItems } from '../interfaces/all-items.interface'

import { ItemDetail } from '../interfaces/item-detail.interface'

const author = {
    name: 'Julio',
    lastName: 'Vasquez',
}

export const formatAllItems = (data: any) => {
    const response: AllItems = {
        author,
        categories: data['available_filters']?.[0]?.['values'].map(
            (element: any) => element['name']
        ),
        item: data['results'].map((element: any) => ({
            id: element['id'],
            title: element['title'],
            price: {
                amount: Math.trunc(element['price']),
                currency: element['currency_id'],
                decimals: element['price'].toString().split('.')?.[1],
            },
            picture: element['thumbnail'],
            condition: element['condition'],
            free_shipping: element['shipping']['free_shipping'],
        })),
    }

    return response
}

export const formatItemDetail = (data: any) => {
    const response: ItemDetail = {
        author,
        item: {
            id: data['id'],
            title: data['title'],
            price: {
                amount: Math.trunc(data['price']),
                currency: data['currency_id'],
                decimals: data['price'].toString().split('.')?.[1],
            },
            picture: data['thumbnail'],
            condition: data['condition'],
            free_shipping: data['shipping']['free_shipping'],
            sold_quantity: data['sold_quantity'],
            description: data['plain_text'],
        },
    }

    return response
}
