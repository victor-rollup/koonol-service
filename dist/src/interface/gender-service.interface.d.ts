import { ICreationResponse } from '../model/creation.model';
import { IGenderCreate, IGenderResponse } from '../model/gender.model';
export default interface IGenderService {
    createGender(gender: IGenderCreate): Promise<ICreationResponse>;
    getGenderById(id: number): Promise<IGenderResponse>;
    getGenderCollection(): Promise<IGenderResponse[]>;
    updateGender(gender: IGenderResponse): Promise<boolean>;
    deleteGender(gender: IGenderResponse): Promise<boolean>;
}
