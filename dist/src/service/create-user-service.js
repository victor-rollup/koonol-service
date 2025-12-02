"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const create_client_1 = require("@/api/create-client");
const routes_enum_1 = require("@/enum/routes.enum");
function default_1(baseURL) {
    const client = (0, create_client_1.default)(baseURL);
    return {
        async signIn(credentials) {
            const { data: connection } = await client.post(routes_enum_1.Routes.CONNECT_ACCOUNT, credentials);
            return connection;
        },
        async signUp(employee, credentials) {
            const { data: connection } = await client.post(routes_enum_1.Routes.CREATE_ACCOUNT, {
                employee,
                credentials,
            });
            return connection;
        },
        async authenticate(nickname) {
            const { data: hasAccount } = await client.get(routes_enum_1.Routes.AUTHENTICATE_NICKNAME, {
                params: {
                    nickname,
                },
            });
            return hasAccount;
        },
    };
}
