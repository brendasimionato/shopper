"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const connection_1 = require("../connection");
const ProductsRepository_1 = require("./ProductsRepository");
class OrderRepository {
    constructor() {
        this.create = (order) => __awaiter(this, void 0, void 0, function* () {
            return yield connection_1.connection.insert({
                client_name: order.client_name,
                delivery_date: order.delivery_date,
                total: order.total
            }).table('shopper_order')
                .then(res => {
                this.insertItems(res[0], order.products);
                console.log("Order was created succefully.");
            })
                .catch(err => {
                console.log(err);
            });
        });
        this.update = (order) => __awaiter(this, void 0, void 0, function* () {
            return yield connection_1.connection.update({
                client_name: order.client_name,
                delivery_date: order.delivery_date
            })
                .table('shopper_order')
                .where('id', order.id)
                .then(res => {
                connection_1.connection.select()
                    .where('order_id', order.id)
                    .table('shopper_order_products')
                    .then(res => {
                    res.forEach(item => {
                        this.productRepository.addStock(item.product_id, item.qty);
                    });
                })
                    .catch(err => {
                    console.log(err);
                    console.log(`Error on add products stock`);
                });
                connection_1.connection.delete()
                    .where('order_id', order.id)
                    .table('shopper_order_products')
                    .then(res => {
                    this.insertItems(order.id, order.products);
                    console.log(`Order ${order.id} was updated succefully`);
                })
                    .catch(err => {
                    console.log(err);
                    console.log(`Error on update order`);
                });
            });
        });
        this.listAll = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield connection_1.connection.raw(`
            SELECT * FROM shopper_order
        `);
            return result[0][0];
        });
        this.insertItems = (orderId, products) => __awaiter(this, void 0, void 0, function* () {
            products.forEach(product => {
                connection_1.connection.insert({
                    order_id: orderId,
                    product_id: product.id,
                    qty: product.qty_order
                }).table('shopper_order_products')
                    .then(res => {
                    console.log(`Item ${product.id} was inserted succefully.`);
                    this.productRepository.subtractStock(product.id, product.qty_order);
                })
                    .catch(err => {
                    console.log("Error on insert order");
                    console.log(err);
                });
            });
        });
        this.productRepository = new ProductsRepository_1.ProductsRepository();
    }
}
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=OrderRepository.js.map