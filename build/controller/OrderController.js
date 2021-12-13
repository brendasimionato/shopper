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
exports.OrderController = void 0;
const OrderService_1 = require("../service/OrderService");
const express_1 = require("express");
class OrderController {
    constructor() {
        this.path = '/orders';
        this.router = (0, express_1.Router)();
        this.listAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const orders = yield this.orderService.get();
            if (orders != null && orders != undefined) {
                return res.status(200).send(orders);
            }
            else {
                return res.status(204);
            }
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const order = req.body;
            if (order != null && order != undefined) {
                yield this.orderService.create(order)
                    .then(result => { return res.status(201).send(result); });
            }
            else {
                return res.status(400).send("Can't possible create order.");
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const order = req.body;
            if (order != null && order != undefined && order.id != null) {
                const updatedOrder = yield this.orderService.update(order);
                return res.status(201).send(updatedOrder);
            }
            else {
                return res.status(400).send("Can't possible updated order.");
            }
        });
        this.router.get(`${this.path}`, this.listAll);
        this.router.post(`${this.path}`, this.create);
        this.router.put(`${this.path}`, this.update);
        this.orderService = new OrderService_1.OrderService();
    }
}
exports.OrderController = OrderController;
//# sourceMappingURL=OrderController.js.map