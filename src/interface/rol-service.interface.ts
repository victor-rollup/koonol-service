import { ICreationResponse } from '../model/creation.model';
import { IRolCreate, IRolResponse } from '../model/rol.model';

export default interface IRolService {
  createRol(rol: IRolCreate): Promise<ICreationResponse>;
  getRolById(id: number): Promise<IRolResponse>;
  getRolCollection(): Promise<IRolResponse[]>;
  updateRol(rol: IRolResponse): Promise<boolean>;
  deleteRol(rol: IRolResponse): Promise<boolean>;
}
