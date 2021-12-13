"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
class App {
    constructor(controllers) {
        this.app = (0, express_1.default)();
        this.initializeMiddlewares(controllers);
    }
    listen(port) {
        this.app.listen(port, () => {
            console.log(`App listening on the port ${port}`);
        });
    }
    initializeMiddlewares(controllers) {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.initializeControllers(controllers);
        this.app.use((error, req, res, next) => {
            return res.status(error.statusCode || 500).send(error.message);
        });
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map