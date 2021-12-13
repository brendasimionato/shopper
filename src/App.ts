import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import { Controller } from './controller/Controller';

export class App {

    public app: express.Application;

    constructor(controllers: Controller[]) {
        this.app = express()
        this.initializeMiddlewares(controllers)
        
    }

    public listen() {
        this.app.listen(3001, () => {
            console.log(`App listening on the port 3001`);
        })
    }

    private initializeMiddlewares(controllers: Controller[]) {
        this.app.use(express.json())
        this.app.use(cors())
        this.initializeControllers(controllers)
        this.app.use((error: any, req: any, res: any, next: any) => {
            return res.status(error.statusCode || 500).send(error.message);
        })
    }

    private initializeControllers(controllers: Controller[]) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        })
    }

}