import { IEmployeeResponse } from '../model/employee.model';
export default function (constructor?: IEmployeeResponse): {
    getEmployee(): IEmployeeResponse;
    setEmployee(value: IEmployeeResponse): void;
};
