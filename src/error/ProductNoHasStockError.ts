import { Product } from "../entity/Product";

export class ProductNoHasStockError extends Error {

    statusCode: number;

    constructor(products: Product[]) {

        let message = "Products no has stock. IDs: "
        products.forEach(product => {
            message = message + `${product.id}, `
        })

        super(`${message}`)
        this.statusCode = 400
        Object.setPrototypeOf(this, ProductNoHasStockError.prototype);
    }
}