import createClient from '../api/create-client';
import { Routes } from '../enum/routes.enum';
import IProductService from '../interface/product-service.interface';
import { ICreationResponse } from '../model/creation.model';
import { IProductResponse } from '../model/product.model';

export default function (baseURL: string, token: string): IProductService {
  const client = createClient(baseURL, token);

  return {
    async createProduct(product) {
      const { data: creation } = await client.post<ICreationResponse>(
        Routes.PRODUCT,
        product
      );
      return creation;
    },
    async getProductById(id) {
      const { data: product } = await client.get<IProductResponse>(
        Routes.PRODUCT,
        { params: { id } }
      );
      return product;
    },
    async getProductCollection() {
      const { data: collection } = await client.get<IProductResponse[]>(
        Routes.PRODUCT_COLLECTION
      );
      return collection;
    },
    async updateProduct(product) {
      const { data: updated } = await client.put<boolean>(
        Routes.PRODUCT,
        product
      );
      return updated;
    },
    async deleteProduct(product) {
      const { data: deleted } = await client.delete<boolean>(Routes.PRODUCT, {
        params: {
          product,
        },
      });
      return deleted;
    },
  };
}
