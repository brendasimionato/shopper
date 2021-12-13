"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(id, client_name, delivery_date, total, products) {
        this.id = id;
        this.client_name = client_name;
        this.delivery_date = delivery_date;
        this.total = total;
        this.products = products;
    }
}
exports.Order = Order;
//# sourceMappingURL=Order.js.map