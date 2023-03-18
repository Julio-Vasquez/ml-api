import { Item } from './item.interface'
import { Author } from './author.interface'

export interface AllItems {
    author: Author
    categories: string[]
    item: Item[]
}
