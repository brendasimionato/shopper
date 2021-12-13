"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderNoHasProductsError = void 0;
class OrderNoHasProductsError extends Error {
    constructor() {
        super("Order no has product");
        this.statusCode = 400;
        Object.setPrototypeOf(this, OrderNoHasProductsError.prototype);
    }
}
exports.OrderNoHasProductsError = OrderNoHasProductsError;
//# sourceMappingURL=OrderNoHasProductsError.js.map