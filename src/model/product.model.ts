import { ICategoryResponse } from './category.model';
import { IMeasurementUnitResponse } from './measurement-unit.model';

export interface IProductCreate {
  idMeasurementUnit: number;
  idCategory?: number | null;
  code?: string | null;
  name: string;
  price: number;
  thumbnail?: string | null;
  isEnabled?: number | null;
}

export interface IProductUpdate extends Partial<IProductCreate> {}

export interface IProductResponse extends IProductCreate {
  id: number;
  readonly category?: ICategoryResponse;
  readonly measurementUnit?: IMeasurementUnitResponse;
}
