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
exports.ProductsService = void 0;
const ProductsRepository_1 = require("../repository/ProductsRepository");
class ProductsService {
    constructor() {
        this.get = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.productsRepository.listAll();
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.productsRepository.getById(id)
                .then(res => {
                return res;
            })
                .catch(err => {
                console.log(err);
                console.log(`Error on get product by id: ${id}`);
            });
        });
        this.productsRepository = new ProductsRepository_1.ProductsRepository();
    }
}
exports.ProductsService = ProductsService;
//# sourceMappingURL=ProductsService.js.map