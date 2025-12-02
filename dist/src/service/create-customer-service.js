"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const create_client_1 = require("../api/create-client");
const routes_enum_1 = require("../enum/routes.enum");
function default_1(baseURL, token) {
    const client = (0, create_client_1.default)(baseURL, token);
    return {
        async createCustomer(customer) {
            const { data: creation } = await client.post(routes_enum_1.Routes.CUSTOMER, customer);
            return creation;
        },
        async getCustomerById(id) {
            const { data: customer } = await client.get(routes_enum_1.Routes.CUSTOMER, {
                params: {
                    id,
                },
            });
            return customer;
        },
        async getCustomerCollection() {
            const { data: collection } = await client.get(routes_enum_1.Routes.CUSTOMER_COLLECTION);
            return collection;
        },
        async updateCustomer(customer) {
            const { data: updated } = await client.put(routes_enum_1.Routes.CUSTOMER, customer);
            return updated;
        },
        async deleteCustomer(customer) {
            const { data: deleted } = await client.delete(routes_enum_1.Routes.CUSTOMER, {
                params: {
                    customer,
                },
            });
            return deleted;
        },
    };
}
