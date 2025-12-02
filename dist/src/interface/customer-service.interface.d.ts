import { ICreationResponse } from '@/model/creation.model';
import { ICustomerCreate, ICustomerResponse } from '@/model/customer.model';
export default interface ICustomerService {
    createCustomer(customer: ICustomerCreate): Promise<ICreationResponse>;
    getCustomerById(id: number): Promise<ICustomerResponse>;
    getCustomerCollection(): Promise<ICustomerResponse[]>;
    updateCustomer(customer: ICustomerResponse): Promise<boolean>;
    deleteCustomer(customer: ICustomerResponse): Promise<boolean>;
}
