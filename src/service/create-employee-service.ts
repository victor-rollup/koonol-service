import createClient from '@/api/create-client';
import { Routes } from '@/enum/routes.enum';
import IEmployeeService from '@/interface/employee-service.interface';
import { ICreationResponse } from '@/model/creation.model';
import { IEmployeeResponse } from '@/model/employee.model';

export default function (baseURL: string, token: string): IEmployeeService {
  const client = createClient(baseURL, token);

  return {
    async createEmployee(employee) {
      const { data: creation } = await client.post<ICreationResponse>(
        Routes.EMPLOYEE,
        employee
      );
      return creation;
    },
    async getEmployeById(id) {
      const { data: employee } = await client.get<IEmployeeResponse>(
        Routes.EMPLOYEE,
        {
          params: {
            id,
          },
        }
      );
      return employee;
    },
    async getEmployeCollection() {
      const { data: collection } = await client.get<IEmployeeResponse[]>(
        Routes.EMPLOYEE_COLLECTION
      );
      return collection;
    },
    async updateEmployee(employee) {
      const { data: updated } = await client.put<boolean>(
        Routes.EMPLOYEE,
        employee
      );
      return updated;
    },
    async deleteEmployee(employee) {
      const { data: deleted } = await client.delete<boolean>(Routes.EMPLOYEE, {
        params: {
          employee,
        },
      });
      return deleted;
    },
  };
}
