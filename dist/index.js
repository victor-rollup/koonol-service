"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const create_user_service_1 = require("./service/create-user-service");
function default_1(baseURL) {
    return { account: (0, create_user_service_1.default)(baseURL) };
}
