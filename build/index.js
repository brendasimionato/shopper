"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const OrderController_1 = require("./controller/OrderController");
const ProductsController_1 = require("./controller/ProductsController");
const app = new App_1.App([
    new ProductsController_1.ProductsController(),
    new OrderController_1.OrderController()
]);
app.listen();
//# sourceMappingURL=index.js.map