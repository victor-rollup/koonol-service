import { ICreationResponse } from '../model/creation.model';
import { IEmployeeCreate, IEmployeeResponse } from '../model/employee.model';

export default interface IEmployeeService {
  createEmployee(employee: IEmployeeCreate): Promise<ICreationResponse>;
  getEmployeById(id: number): Promise<IEmployeeResponse>;
  getEmployeCollection(): Promise<IEmployeeResponse[]>;
  updateEmployee(employee: IEmployeeResponse): Promise<boolean>;
  deleteEmployee(employee: IEmployeeResponse): Promise<boolean>;
}
