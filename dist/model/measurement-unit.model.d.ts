export interface IMeasurementUnitCreate {
    name: string;
    symbol: string;
}
export interface IMeasurementUnitUpdate extends Partial<IMeasurementUnitCreate> {
}
export interface IMeasurementUnitResponse extends IMeasurementUnitCreate {
    id: number;
}
