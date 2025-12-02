import { ICreationResponse } from '../model/creation.model';
import { INationalityCreate, INationalityResponse } from '../model/nationality.model';
export default interface INationalityService {
    createNationality(nationality: INationalityCreate): Promise<ICreationResponse>;
    getNationalityById(id: number): Promise<INationalityResponse>;
    getNationalityCollection(): Promise<INationalityResponse[]>;
    updateNationality(nationality: INationalityResponse): Promise<boolean>;
    deleteNationality(nationality: INationalityResponse): Promise<boolean>;
}
