"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const create_client_1 = require("@/api/create-client");
const routes_enum_1 = require("@/enum/routes.enum");
function default_1(baseURL, token) {
    const client = (0, create_client_1.default)(baseURL, token);
    return {
        async createCategory(category) {
            const { data: creation } = await client.post(routes_enum_1.Routes.CATEGORY, category);
            return creation;
        },
        async getCategoryById(id) {
            const { data: category } = await client.get(routes_enum_1.Routes.CATEGORY, {
                params: { id },
            });
            return category;
        },
        async getCategoryCollection() {
            const { data: collection } = await client.get(routes_enum_1.Routes.CATEGORY_COLLECTION);
            return collection;
        },
        async updateCategory(category) {
            const { data: updated } = await client.put(routes_enum_1.Routes.CATEGORY, category);
            return updated;
        },
        async deleteCategory(category) {
            const { data: deleted } = await client.delete(routes_enum_1.Routes.CATEGORY, {
                params: {
                    category,
                },
            });
            return deleted;
        },
    };
}
