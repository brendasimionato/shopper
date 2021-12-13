import { connection } from "../connection";
import { Product } from "../entity/Product";

export class ProductsRepository {

    create = async (product: Product): Promise<any> => {
        const result = await connection.raw(`
            INSERT INTO shopper_products (name, price, qty_stock) VALUES ('${product.name}', ${product.price}, ${product.qty_stock})
        `)
        return result[0][0]
    }

    listAll = async (): Promise<any> => {
        const result = await connection.raw(`
            SELECT * FROM shopper_products
        `)
        return result[0]
    }

    getById = async (id: Number) : Promise<any> => {
        return await connection.select()
            .where('id', id)
            .table('shopper_products')
            .then(res => {
                return res[0]
            })
            .catch(err => {
                console.log(err)
                console.log(`Error on get product by id. ProductId: ${id}`)
            })
    }

    subtractStock = async (productdId: Number, qtyStock: Number) : Promise<any> => {
        return await connection.raw(`
            UPDATE shopper_products set qty_stock = qty_stock - ${qtyStock} WHERE id = ${productdId}
        `).then(res => {
            console.log(`Stock of product ${productdId} was substracted succefully.`)
        })
        .catch(err => {
            console.log(err)
            console.log(`Error on stock update of product ${productdId}`)
        })
    }

    addStock = async (productdId: Number, qtyStock: Number) : Promise<any> => {
        return await connection.raw(`
            UPDATE shopper_products set qty_stock = qty_stock + ${qtyStock} WHERE id = ${productdId}
        `).then(res => {
            console.log(`Stock of product ${productdId} was added succefully.`)
        })
        .catch(err => {
            console.log(err)
            console.log(`Error on stock update of product ${productdId}`)
        })
    }
}