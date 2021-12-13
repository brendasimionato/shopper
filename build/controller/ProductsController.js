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
exports.ProductsController = void 0;
const ProductsService_1 = require("../service/ProductsService");
const express_1 = require("express");
class ProductsController {
    constructor() {
        this.path = '/products';
        this.router = (0, express_1.Router)();
        this.listAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.productsService.get()
                .then(products => {
                if (products != null && products != undefined) {
                    return res.status(200).send(products);
                }
                else {
                    return res.status(204);
                }
            });
        });
        this.router.get(`${this.path}`, this.listAll);
        this.productsService = new ProductsService_1.ProductsService();
    }
}
exports.ProductsController = ProductsController;
//# sourceMappingURL=ProductsController.js.map