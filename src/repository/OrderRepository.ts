import { Order } from "../entity/Order";
import { connection } from "../connection";
import { Product } from "../entity/Product";
import { ProductsRepository } from "./ProductsRepository";

export class OrderRepository {

    private productRepository: ProductsRepository

    constructor() {
        this.productRepository = new ProductsRepository()
    }

    create = async (order: Order): Promise<any> => {
        return await connection.insert({
            client_name: order.client_name,
            delivery_date: order.delivery_date
        }).table('shopper_order')
            .then(res => {
                this.insertItems(res[0], order.products)
                console.log("Order was created succefully.")
            })
            .catch(err => {
                console.log(err)
            })
    }

    update = async (order: Order) : Promise<any> => {
        return await connection.update({
                client_name: order.client_name,
                delivery_date: order.delivery_date
            })
            .table('shopper_order')
            .where('id', order.id)
            .then(res => {

                connection.select()
                .where('order_id', order.id)
                .table('shopper_order_products')
                .then(res => {
                    res.forEach(item => {
                        this.productRepository.addStock(item.product_id, item.qty)
                    })
                })
                .catch(err => {
                    console.log(err)
                    console.log(`Error on add products stock`)
                })

                connection.delete()
                .where('order_id', order.id)
                .table('shopper_order_products')
                .then(res => {
                    this.insertItems(order.id, order.products)
                    console.log(`Order ${order.id} was updated succefully`)
                })
                .catch(err => {
                    console.log(err)
                    console.log(`Error on update order`)
                })
            })
    }


    listAll = async (): Promise<any> => {
        const result = await connection.raw(`
            SELECT * FROM shopper_order
        `)
        return result[0][0]
    }

    private insertItems = async (orderId: Number, products: Product[]) : Promise<any> => {
        products.forEach(product => {
            connection.insert({
                order_id: orderId,
                product_id: product.id,
                qty: product.qty_order
            }).table('shopper_order_products')
                .then(res => {
                    console.log(`Item ${product.id} was inserted succefully.`)
                    this.productRepository.subtractStock(product.id, product.qty_order)
                })
                .catch(err => {
                    console.log("Error on insert order")
                    console.log(err)
                })
        })
    }


}