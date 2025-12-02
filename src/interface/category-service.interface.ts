import { ICategoryCreate, ICategoryResponse } from '@/model/category.model';
import { ICreationResponse } from '@/model/creation.model';

export default interface ICategoryService {
  createCategory(category: ICategoryCreate): Promise<ICreationResponse>;
  getCategoryById(id: number): Promise<ICategoryResponse>;
  getCategoryCollection(): Promise<ICategoryResponse[]>;
  updateCategory(category: ICategoryResponse): Promise<boolean>;
  deleteCategory(category: ICategoryResponse): Promise<boolean>;
}
