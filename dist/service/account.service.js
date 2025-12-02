"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const client_1 = require("../api/client");
const account_enum_1 = require("../enum/account.enum");
const connection_store_1 = require("../store/connection.store");
function default_1(baseURL) {
    const client = (0, client_1.default)(baseURL);
    return {
        async signIn(credentials) {
            const { data: connection } = await client.post(account_enum_1.ACCOUNT.ConnectAccount, credentials);
            return (0, connection_store_1.default)(connection);
        },
        async signUp(employee, credentials) {
            const { data: connection } = await client.post(account_enum_1.ACCOUNT.CreateAccount, {
                employee,
                credentials,
            });
            return (0, connection_store_1.default)(connection);
        },
        async authenticate(nickname) {
            const { data: hasAccount } = await client.get(account_enum_1.ACCOUNT.AuthenticateNickname, {
                params: {
                    nickname,
                },
            });
            return hasAccount;
        },
    };
}
