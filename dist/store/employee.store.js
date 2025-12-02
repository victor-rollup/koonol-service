"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const valtio_1 = require("valtio");
function default_1(constructor) {
    let employee = (0, valtio_1.proxy)(constructor);
    return {
        getEmployee() {
            return employee;
        },
        setEmployee(value) {
            employee = value;
        },
    };
}
