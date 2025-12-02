"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const create_client_1 = require("../api/create-client");
const routes_enum_1 = require("../enum/routes.enum");
function default_1(baseURL) {
    const client = (0, create_client_1.default)(baseURL);
    return {
        async createGender(gender) {
            const { data } = await client.post(routes_enum_1.Routes.GENDER, gender);
            return data;
        },
        async getGenderById(id) {
            const { data: gender } = await client.get(routes_enum_1.Routes.GENDER, {
                params: {
                    id,
                },
            });
            return gender;
        },
        async getGenderCollection() {
            const { data: collection } = await client.get(routes_enum_1.Routes.GENDER_COLLECTION);
            return collection;
        },
        async updateGender(gender) {
            const { data } = await client.put(routes_enum_1.Routes.GENDER, gender);
            return data;
        },
        async deleteGender(gender) {
            const { data } = await client.delete(routes_enum_1.Routes.GENDER, {
                params: {
                    gender,
                },
            });
            return data;
        },
    };
}
