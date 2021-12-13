import { ProductsRepository } from "../repository/ProductsRepository"

export class ProductsService {

    private productsRepository: ProductsRepository

    constructor() {
        this.productsRepository = new ProductsRepository()
    }

    public get = async (): Promise<any> => {
        return await this.productsRepository.listAll()
    }

    public getById = async (id: Number) : Promise<any> => {
        return await this.productsRepository.getById(id)
            .then(res => {
                return res
            })
            .catch(err => {
                console.log(err)
                console.log(`Error on get product by id: ${id}`)
            })
    }
}