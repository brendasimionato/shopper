export class OrderNoHasProductsError extends Error {
    
    statusCode: number;
    
    constructor() {
        super("Order no has product")
        this.statusCode = 400
        Object.setPrototypeOf(this, OrderNoHasProductsError.prototype);
    }
    
}