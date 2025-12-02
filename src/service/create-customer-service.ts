import createClient from '../api/create-client';
import { Routes } from '../enum/routes.enum';
import ICustomerService from '../interface/customer-service.interface';
import { ICreationResponse } from '../model/creation.model';
import { ICustomerResponse } from '../model/customer.model';

export default function (baseURL: string, token: string): ICustomerService {
  const client = createClient(baseURL, token);

  return {
    async createCustomer(customer) {
      const { data: creation } = await client.post<ICreationResponse>(
        Routes.CUSTOMER,
        customer
      );
      return creation;
    },
    async getCustomerById(id) {
      const { data: customer } = await client.get<ICustomerResponse>(
        Routes.CUSTOMER,
        {
          params: {
            id,
          },
        }
      );
      return customer;
    },
    async getCustomerCollection() {
      const { data: collection } = await client.get<ICustomerResponse[]>(
        Routes.CUSTOMER_COLLECTION
      );
      return collection;
    },
    async updateCustomer(customer) {
      const { data: updated } = await client.put<boolean>(
        Routes.CUSTOMER,
        customer
      );
      return updated;
    },
    async deleteCustomer(customer) {
      const { data: deleted } = await client.delete<boolean>(Routes.CUSTOMER, {
        params: {
          customer,
        },
      });
      return deleted;
    },
  };
}
