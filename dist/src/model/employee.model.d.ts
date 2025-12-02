import { IGenderResponse } from './gender.model';
import { INationalityResponse } from './nationality.model';
import { IRolResponse } from './rol.model';
export interface IEmployeeCreate {
    idRol: number;
    idUser: number;
    name: string;
    paternalSurname: string;
    maternalSurname?: string | null;
    birthdate: Date;
    birthplace?: string | null;
    phone?: string | null;
    email?: string | null;
    idGender: number;
    idNationality?: number | null;
    taxID?: string | null;
    SSN?: string | null;
    civilID?: string | null;
    voterID?: string | null;
}
export interface IEmployeeUpdate extends Partial<IEmployeeCreate> {
}
export interface IEmployeeInformation extends Omit<IEmployeeCreate, 'idUser'> {
}
export interface IEmployeeResponse extends IEmployeeCreate {
    id: number;
    readonly rol?: IRolResponse;
    readonly gender?: IGenderResponse;
    readonly nationality?: INationalityResponse;
}
