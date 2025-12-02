import ICategoryService from './category-service.interface';
import ICustomerService from './customer-service.interface';
import IEmployeeService from './employee-service.interface';
import IGenderService from './gender-service.interface';
import IMeasurementUnitService from './measurement-unit-service.interface';
import INationalityService from './nationality-service.interface';
import IProductService from './product-service.interface';
import IRolService from './rol-service.interface';
import IUserService from './user-service.interface';

export default interface IService {
  useCategory(token: string): ICategoryService;
  useCustomer(token: string): ICustomerService;
  useEmployee(token: string): IEmployeeService;
  useGender(): IGenderService;
  useMeasurementUnit(): IMeasurementUnitService;
  useNationality(): INationalityService;
  useProduct(token: string): IProductService;
  useRol(token: string): IRolService;
  useUser(): IUserService;
}
