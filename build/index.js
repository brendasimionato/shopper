"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const OrderController_1 = require("./controller/OrderController");
const ProductsController_1 = require("./controller/ProductsController");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = new App_1.App([
    new ProductsController_1.ProductsController(),
    new OrderController_1.OrderController()
]);
app.listen(Number(process.env.SERVER_PORT));
//# sourceMappingURL=index.js.map