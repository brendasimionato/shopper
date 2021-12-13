import { Product } from "./Product"

export class Order {

    id: number
    client_name: string
    delivery_date: Date
    total: Number
    products: Product[]

    constructor(id: number, client_name: string, delivery_date: Date, total: Number, products: Product[]) {
        this.id = id
        this.client_name = client_name
        this.delivery_date = delivery_date
        this.total = total
        this.products = products
    }
}