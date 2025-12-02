"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const axios_1 = require("axios");
function default_1(baseURL, token, options) {
    return axios_1.default.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        timeout: 3000,
        ...options,
    });
}
