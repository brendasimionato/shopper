import { Order } from "../entity/Order";
import { OrderNoHasProductsError } from "../error/OrderNoHasProductsError";
import { OrderRepository } from "../repository/OrderRepository";
import { ProductsService } from "./ProductsService";
import { ProductNoHasStockError } from "../error/ProductNoHasStockError";

export class OrderService {

    private orderRepository: OrderRepository
    private productService: ProductsService

    constructor() {
        this.orderRepository = new OrderRepository()
        this.productService = new ProductsService()
    }

    public get = async (): Promise<any> => {
        return await this.orderRepository.listAll()
    }

    public create = async (order: Order): Promise<any> => {

        if (order.products == null || order.products == undefined || order.products.length <= 0) {
            throw new OrderNoHasProductsError()
        }

        const productNoHasStockList: any[] = []
        await Promise.all(
          order.products.map(async (product) => {
            this.productService.getById(product.id)
                .then(res => {
                    if(res.qty_stock < product.qty_order) productNoHasStockList.push(product)
                });
          })
        )

        if(productNoHasStockList.length > 0) {
            throw new ProductNoHasStockError(productNoHasStockList)
        }
        
        return await this.orderRepository.create(order)

    }

    public update = async (order: Order): Promise<any> => {
        return await this.orderRepository.update(order)
    }
}