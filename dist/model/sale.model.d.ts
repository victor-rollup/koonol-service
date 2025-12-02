import { ICustomerResponse } from './customer.model';
import { IEmployeeResponse } from './employee.model';
export interface ISaleCreate {
    idCustomer?: number | null;
    idEmployee: number;
    total: number;
}
export interface ISaleUpdate extends Partial<ISaleCreate> {
}
export interface ISaleResponse extends ISaleCreate {
    id: number;
    readonly customer?: ICustomerResponse;
    readonly employee?: IEmployeeResponse;
}
