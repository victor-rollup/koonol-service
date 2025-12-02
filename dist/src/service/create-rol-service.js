"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const create_client_1 = require("@/api/create-client");
const routes_enum_1 = require("@/enum/routes.enum");
function default_1(baseURL, token) {
    const client = (0, create_client_1.default)(baseURL, token);
    return {
        async createRol(rol) {
            const { data: creation } = await client.post(routes_enum_1.Routes.ROL, rol);
            return creation;
        },
        async getRolById(id) {
            const { data: rol } = await client.get(routes_enum_1.Routes.ROL, {
                params: { id },
            });
            return rol;
        },
        async getRolCollection() {
            const { data: collection } = await client.get(routes_enum_1.Routes.ROL_COLLECTION);
            return collection;
        },
        async updateRol(rol) {
            const { data: updated } = await client.put(routes_enum_1.Routes.ROL, rol);
            return updated;
        },
        async deleteRol(rol) {
            const { data: deleted } = await client.delete(routes_enum_1.Routes.ROL, {
                params: { rol },
            });
            return deleted;
        },
    };
}
