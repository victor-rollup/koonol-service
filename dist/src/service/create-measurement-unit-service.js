"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const create_client_1 = require("../api/create-client");
const routes_enum_1 = require("../enum/routes.enum");
function default_1(baseURL) {
    const client = (0, create_client_1.default)(baseURL);
    return {
        async createMeasurementUnit(measurementUnit) {
            const { data: creation } = await client.post(routes_enum_1.Routes.MEASUREMENT_UNIT, measurementUnit);
            return creation;
        },
        async getMeasurementUnitById(id) {
            const { data: measurementUnit } = await client.get(routes_enum_1.Routes.MEASUREMENT_UNIT, {
                params: {
                    id,
                },
            });
            return measurementUnit;
        },
        async getMeasurementUnitCollection() {
            const { data: collection } = await client.get(routes_enum_1.Routes.MEASUREMENT_UNIT_COLLECTION);
            return collection;
        },
        async updateMeasurementUnit(measurementUnit) {
            const { data: updated } = await client.put(routes_enum_1.Routes.MEASUREMENT_UNIT, measurementUnit);
            return updated;
        },
        async deleteMeasurementUnit(measurementUnit) {
            const { data: deleted } = await client.delete(routes_enum_1.Routes.MEASUREMENT_UNIT, {
                params: { measurementUnit },
            });
            return deleted;
        },
    };
}
