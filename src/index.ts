import { App } from "./App";
import { OrderController } from "./controller/OrderController";
import { ProductsController } from "./controller/ProductsController";

const app = new App([
    new ProductsController(),
    new OrderController()
])

app.listen()