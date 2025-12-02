"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const create_client_1 = require("../api/create-client");
const routes_enum_1 = require("../enum/routes.enum");
function default_1(baseURL, token) {
    const client = (0, create_client_1.default)(baseURL, token);
    return {
        async createEmployee(employee) {
            const { data: creation } = await client.post(routes_enum_1.Routes.EMPLOYEE, employee);
            return creation;
        },
        async getEmployeById(id) {
            const { data: employee } = await client.get(routes_enum_1.Routes.EMPLOYEE, {
                params: {
                    id,
                },
            });
            return employee;
        },
        async getEmployeCollection() {
            const { data: collection } = await client.get(routes_enum_1.Routes.EMPLOYEE_COLLECTION);
            return collection;
        },
        async updateEmployee(employee) {
            const { data: updated } = await client.put(routes_enum_1.Routes.EMPLOYEE, employee);
            return updated;
        },
        async deleteEmployee(employee) {
            const { data: deleted } = await client.delete(routes_enum_1.Routes.EMPLOYEE, {
                params: {
                    employee,
                },
            });
            return deleted;
        },
    };
}
