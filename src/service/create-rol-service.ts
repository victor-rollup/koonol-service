import createClient from '../api/create-client';
import { Routes } from '../enum/routes.enum';
import IRolService from '../interface/rol-service.interface';
import { ICreationResponse } from '../model/creation.model';
import { IRolResponse } from '../model/rol.model';

export default function (baseURL: string, token: string): IRolService {
  const client = createClient(baseURL, token);

  return {
    async createRol(rol) {
      const { data: creation } = await client.post<ICreationResponse>(
        Routes.ROL,
        rol
      );
      return creation;
    },
    async getRolById(id) {
      const { data: rol } = await client.get<IRolResponse>(Routes.ROL, {
        params: { id },
      });
      return rol;
    },
    async getRolCollection() {
      const { data: collection } = await client.get<IRolResponse[]>(
        Routes.ROL_COLLECTION
      );
      return collection;
    },
    async updateRol(rol) {
      const { data: updated } = await client.put<boolean>(Routes.ROL, rol);
      return updated;
    },
    async deleteRol(rol) {
      const { data: deleted } = await client.delete<boolean>(Routes.ROL, {
        params: { rol },
      });
      return deleted;
    },
  };
}
