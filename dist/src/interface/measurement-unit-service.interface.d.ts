import { ICreationResponse } from '@/model/creation.model';
import { IMeasurementUnitCreate, IMeasurementUnitResponse } from '@/model/measurement-unit.model';
export default interface IMeasurementUnitService {
    createMeasurementUnit(measurementUnit: IMeasurementUnitCreate): Promise<ICreationResponse>;
    getMeasurementUnitById(id: number): Promise<IMeasurementUnitResponse>;
    getMeasurementUnitCollection(): Promise<IMeasurementUnitResponse[]>;
    updateMeasurementUnit(measurementUnit: IMeasurementUnitResponse): Promise<boolean>;
    deleteMeasurementUnit(measurementUnit: IMeasurementUnitResponse): Promise<boolean>;
}
