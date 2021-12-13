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
exports.ProductsRepository = void 0;
const connection_1 = require("../connection");
class ProductsRepository {
    constructor() {
        this.create = (product) => __awaiter(this, void 0, void 0, function* () {
            const result = yield connection_1.connection.raw(`
            INSERT INTO shopper_products (name, price, qty_stock) VALUES ('${product.name}', ${product.price}, ${product.qty_stock})
        `);
            return result[0][0];
        });
        this.listAll = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield connection_1.connection.raw(`
            SELECT * FROM shopper_products
        `);
            return result[0];
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield connection_1.connection.select()
                .where('id', id)
                .table('shopper_products')
                .then(res => {
                return res[0];
            })
                .catch(err => {
                console.log(err);
                console.log(`Error on get product by id. ProductId: ${id}`);
            });
        });
        this.subtractStock = (productdId, qtyStock) => __awaiter(this, void 0, void 0, function* () {
            return yield connection_1.connection.raw(`
            UPDATE shopper_products set qty_stock = qty_stock - ${qtyStock} WHERE id = ${productdId}
        `).then(res => {
                console.log(`Stock of product ${productdId} was substracted succefully.`);
            })
                .catch(err => {
                console.log(err);
                console.log(`Error on stock update of product ${productdId}`);
            });
        });
        this.addStock = (productdId, qtyStock) => __awaiter(this, void 0, void 0, function* () {
            return yield connection_1.connection.raw(`
            UPDATE shopper_products set qty_stock = qty_stock + ${qtyStock} WHERE id = ${productdId}
        `).then(res => {
                console.log(`Stock of product ${productdId} was added succefully.`);
            })
                .catch(err => {
                console.log(err);
                console.log(`Error on stock update of product ${productdId}`);
            });
        });
    }
}
exports.ProductsRepository = ProductsRepository;
//# sourceMappingURL=ProductsRepository.js.map