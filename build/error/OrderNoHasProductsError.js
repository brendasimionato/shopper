"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderNoHasProductsError = void 0;
class OrderNoHasProductsError extends Error {
    constructor(statusCode) {
        super("Order no has product");
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, OrderNoHasProductsError.prototype);
    }
}
exports.OrderNoHasProductsError = OrderNoHasProductsError;
//# sourceMappingURL=OrderNoHasProductsError.js.map