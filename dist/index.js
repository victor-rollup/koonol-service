"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_store_1 = require("./store/employee.store");
const connection_store_1 = require("./store/connection.store");
const account_service_1 = require("./service/account.service");
exports.default = { employeeStore: employee_store_1.default, connectionStore: connection_store_1.default, accountService: account_service_1.default };
