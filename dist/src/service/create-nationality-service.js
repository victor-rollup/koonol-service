"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const create_client_1 = require("@/api/create-client");
const routes_enum_1 = require("@/enum/routes.enum");
function default_1(baseURL) {
    const client = (0, create_client_1.default)(baseURL);
    return {
        async createNationality(nationality) {
            const { data: creation } = await client.post(routes_enum_1.Routes.NATIONALITY, nationality);
            return creation;
        },
        async getNationalityById(id) {
            const { data: nationality } = await client.get(routes_enum_1.Routes.NATIONALITY, {
                params: {
                    id,
                },
            });
            return nationality;
        },
        async getNationalityCollection() {
            const { data: collection } = await client.get(routes_enum_1.Routes.NATIONALITY_COLLECTION);
            return collection;
        },
        async updateNationality(nationality) {
            const { data: updated } = await client.put(routes_enum_1.Routes.NATIONALITY, nationality);
            return updated;
        },
        async deleteNationality(nationality) {
            const { data: deleted } = await client.delete(routes_enum_1.Routes.NATIONALITY, {
                params: {
                    nationality,
                },
            });
            return deleted;
        },
    };
}
