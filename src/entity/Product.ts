export class Product {

    id: number
    name: string
    price: number
    qty_stock: number
    qty_order: number

    constructor(id: number, name: string, price: number, qty_stock: number, qty_order: number) {

        this.id = id
        this.name = name
        this.price = price
        this.qty_stock = qty_stock
        this.qty_order = qty_order
    }
}