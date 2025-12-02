import { proxy } from 'valtio';
import { IEmployeeResponse } from '../model/employee.model';

export default function (constructor?: IEmployeeResponse) {
  let employee = proxy<IEmployeeResponse>(constructor);

  return {
    getEmployee() {
      return employee;
    },
    setEmployee(value: IEmployeeResponse) {
      employee = value;
    },
  };
}
