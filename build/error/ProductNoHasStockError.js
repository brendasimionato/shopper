"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductNoHasStockError = void 0;
class ProductNoHasStockError extends Error {
    constructor(products) {
        let message = "Products no has stock. IDs: ";
        products.forEach(product => {
            message = message + `${product.id}, `;
        });
        super(`${message}`);
        this.statusCode = 400;
        Object.setPrototypeOf(this, ProductNoHasStockError.prototype);
    }
}
exports.ProductNoHasStockError = ProductNoHasStockError;
//# sourceMappingURL=ProductNoHasStockError.js.map