import { IProductResponse } from './product.model';
import { ISaleResponse } from './sale.model';
export interface ISaleDetailsCreate {
    idSale: number;
    idProduct: number;
    amount: number;
    price: number;
    subtotal: number;
}
export interface ISaleDetailsUpdate extends Partial<ISaleDetailsCreate> {
}
export interface ISaleDetailsResponse extends ISaleDetailsCreate {
    id: number;
    readonly sale?: ISaleResponse;
    readonly product?: IProductResponse;
}
