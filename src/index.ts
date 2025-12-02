import createAccountService from './service/create-user-service';
import createGenderService from './service/create-gender-service';
import IService from './interface/service.interface';
import createCategoryService from './service/create-category-service';
import createCustomerService from './service/create-customer-service';
import createEmployeeService from './service/create-employee-service';
import createMeasurementUnitService from './service/create-measurement-unit-service';
import createNationalityService from './service/create-nationality-service';
import createProductService from './service/create-product-service';
import createRolService from './service/create-rol-service';

export default function createService(baseURL: string): IService {
  return {
    useCategory(token) {
      return createCategoryService(baseURL, token);
    },
    useCustomer(token) {
      return createCustomerService(baseURL, token);
    },
    useEmployee(token) {
      return createEmployeeService(baseURL, token);
    },
    useGender() {
      return createGenderService(baseURL);
    },
    useMeasurementUnit() {
      return createMeasurementUnitService(baseURL);
    },
    useNationality() {
      return createNationalityService(baseURL);
    },
    useProduct(token) {
      return createProductService(baseURL, token);
    },
    useRol(token) {
      return createRolService(baseURL, token);
    },
    useUser() {
      return createAccountService(baseURL);
    },
  };
}
