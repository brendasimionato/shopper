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
exports.OrderService = void 0;
const OrderNoHasProductsError_1 = require("../error/OrderNoHasProductsError");
const OrderRepository_1 = require("../repository/OrderRepository");
const ProductsService_1 = require("./ProductsService");
const ProductNoHasStockError_1 = require("../error/ProductNoHasStockError");
class OrderService {
    constructor() {
        this.get = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.orderRepository.listAll();
        });
        this.create = (order) => __awaiter(this, void 0, void 0, function* () {
            if (order.products == null || order.products == undefined || order.products.length <= 0) {
                throw new OrderNoHasProductsError_1.OrderNoHasProductsError();
            }
            const productNoHasStockList = [];
            yield Promise.all(order.products.map((product) => __awaiter(this, void 0, void 0, function* () {
                this.productService.getById(product.id)
                    .then(res => {
                    if (res.qty_stock < product.qty_order)
                        productNoHasStockList.push(product);
                });
            })));
            if (productNoHasStockList.length > 0) {
                throw new ProductNoHasStockError_1.ProductNoHasStockError(productNoHasStockList);
            }
            return yield this.orderRepository.create(order);
        });
        this.update = (order) => __awaiter(this, void 0, void 0, function* () {
            return yield this.orderRepository.update(order);
        });
        this.orderRepository = new OrderRepository_1.OrderRepository();
        this.productService = new ProductsService_1.ProductsService();
    }
}
exports.OrderService = OrderService;
//# sourceMappingURL=OrderService.js.map