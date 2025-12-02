import createClient from '@/api/create-client';
import { Routes } from '@/enum/routes.enum';
import ICategoryService from '@/interface/category-service.interface';
import { ICreationResponse } from '@/model/creation.model';

export default function (baseURL: string, token: string): ICategoryService {
  const client = createClient(baseURL, token);
  return {
    async createCategory(category) {
      const { data: creation } = await client.post<ICreationResponse>(
        Routes.CATEGORY,
        category
      );
      return creation;
    },
    async getCategoryById(id) {
      const { data: category } = await client.get(Routes.CATEGORY, {
        params: { id },
      });

      return category;
    },
    async getCategoryCollection() {
      const { data: collection } = await client.get(Routes.CATEGORY_COLLECTION);
      return collection;
    },
    async updateCategory(category) {
      const { data: updated } = await client.put<boolean>(
        Routes.CATEGORY,
        category
      );
      return updated;
    },
    async deleteCategory(category) {
      const { data: deleted } = await client.delete<boolean>(Routes.CATEGORY, {
        params: {
          category,
        },
      });
      return deleted;
    },
  };
}
