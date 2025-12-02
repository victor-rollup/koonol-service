"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const client_1 = require("../api/client");
const user_enum_1 = require("../enum/user.enum");
function default_1(baseURL) {
    const client = (0, client_1.default)(baseURL);
    return {
        async signIn(credentials) {
            const { data: connection } = await client.post(user_enum_1.USER.ConnectAccount, credentials);
            return connection;
        },
        async signUp(employee, credentials) {
            const { data: connection } = await client.post(user_enum_1.USER.CreateAccount, {
                employee,
                credentials,
            });
            return connection;
        },
        async authenticate(nickname) {
            const { data: hasAccount } = await client.get(user_enum_1.USER.AuthenticateNickname, {
                params: {
                    nickname,
                },
            });
            return hasAccount;
        },
    };
}
