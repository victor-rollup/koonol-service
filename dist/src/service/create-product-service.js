"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const create_client_1 = require("../api/create-client");
const routes_enum_1 = require("../enum/routes.enum");
function default_1(baseURL, token) {
    const client = (0, create_client_1.default)(baseURL, token);
    return {
        async createProduct(product) {
            const { data: creation } = await client.post(routes_enum_1.Routes.PRODUCT, product);
            return creation;
        },
        async getProductById(id) {
            const { data: product } = await client.get(routes_enum_1.Routes.PRODUCT, { params: { id } });
            return product;
        },
        async getProductCollection() {
            const { data: collection } = await client.get(routes_enum_1.Routes.PRODUCT_COLLECTION);
            return collection;
        },
        async updateProduct(product) {
            const { data: updated } = await client.put(routes_enum_1.Routes.PRODUCT, product);
            return updated;
        },
        async deleteProduct(product) {
            const { data: deleted } = await client.delete(routes_enum_1.Routes.PRODUCT, {
                params: {
                    product,
                },
            });
            return deleted;
        },
    };
}
