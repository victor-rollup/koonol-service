"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createService;
const create_user_service_1 = require("./service/create-user-service");
const create_gender_service_1 = require("./service/create-gender-service");
const create_category_service_1 = require("./service/create-category-service");
const create_customer_service_1 = require("./service/create-customer-service");
const create_employee_service_1 = require("./service/create-employee-service");
const create_measurement_unit_service_1 = require("./service/create-measurement-unit-service");
const create_nationality_service_1 = require("./service/create-nationality-service");
const create_product_service_1 = require("./service/create-product-service");
const create_rol_service_1 = require("./service/create-rol-service");
function createService(baseURL) {
    return {
        useCategory(token) {
            return (0, create_category_service_1.default)(baseURL, token);
        },
        useCustomer(token) {
            return (0, create_customer_service_1.default)(baseURL, token);
        },
        useEmployee(token) {
            return (0, create_employee_service_1.default)(baseURL, token);
        },
        useGender() {
            return (0, create_gender_service_1.default)(baseURL);
        },
        useMeasurementUnit() {
            return (0, create_measurement_unit_service_1.default)(baseURL);
        },
        useNationality() {
            return (0, create_nationality_service_1.default)(baseURL);
        },
        useProduct(token) {
            return (0, create_product_service_1.default)(baseURL, token);
        },
        useRol(token) {
            return (0, create_rol_service_1.default)(baseURL, token);
        },
        useUser() {
            return (0, create_user_service_1.default)(baseURL);
        },
    };
}
