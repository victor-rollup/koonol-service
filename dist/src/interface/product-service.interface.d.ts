import { ICreationResponse } from "../model/creation.model";
import { IProductCreate, IProductResponse } from "../model/product.model";
export default interface IProductService {
    createProduct(product: IProductCreate): Promise<ICreationResponse>;
    getProductById(id: number): Promise<IProductResponse>;
    getProductCollection(): Promise<IProductResponse[]>;
    updateProduct(product: IProductResponse): Promise<boolean>;
    deleteProduct(product: IProductResponse): Promise<boolean>;
}
