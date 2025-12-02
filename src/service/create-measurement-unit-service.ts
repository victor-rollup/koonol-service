import createClient from '@/api/create-client';
import { Routes } from '@/enum/routes.enum';
import IMeasurementUnitService from '@/interface/measurement-unit-service.interface';
import { ICreationResponse } from '@/model/creation.model';
import { IMeasurementUnitResponse } from '@/model/measurement-unit.model';

export default function (baseURL: string): IMeasurementUnitService {
  const client = createClient(baseURL);

  return {
    async createMeasurementUnit(measurementUnit) {
      const { data: creation } = await client.post<ICreationResponse>(
        Routes.MEASUREMENT_UNIT,
        measurementUnit
      );
      return creation;
    },
    async getMeasurementUnitById(id) {
      const { data: measurementUnit } =
        await client.get<IMeasurementUnitResponse>(Routes.MEASUREMENT_UNIT, {
          params: {
            id,
          },
        });
      return measurementUnit;
    },
    async getMeasurementUnitCollection() {
      const { data: collection } = await client.get<IMeasurementUnitResponse[]>(
        Routes.MEASUREMENT_UNIT_COLLECTION
      );
      return collection;
    },
    async updateMeasurementUnit(measurementUnit) {
      const { data: updated } = await client.put<boolean>(
        Routes.MEASUREMENT_UNIT,
        measurementUnit
      );
      return updated;
    },
    async deleteMeasurementUnit(measurementUnit) {
      const { data: deleted } = await client.delete<boolean>(
        Routes.MEASUREMENT_UNIT,
        {
          params: { measurementUnit },
        }
      );
      return deleted;
    },
  };
}
