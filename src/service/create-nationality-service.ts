import createClient from '../api/create-client';
import { Routes } from '../enum/routes.enum';
import INationalityService from '../interface/nationality-service.interface';
import { ICreationResponse } from '../model/creation.model';
import { INationalityResponse } from '../model/nationality.model';

export default function (baseURL: string): INationalityService {
  const client = createClient(baseURL);
  return {
    async createNationality(nationality) {
      const { data: creation } = await client.post<ICreationResponse>(
        Routes.NATIONALITY,
        nationality
      );
      return creation;
    },
    async getNationalityById(id) {
      const { data: nationality } = await client.get<INationalityResponse>(
        Routes.NATIONALITY,
        {
          params: {
            id,
          },
        }
      );
      return nationality;
    },
    async getNationalityCollection() {
      const { data: collection } = await client.get<INationalityResponse[]>(
        Routes.NATIONALITY_COLLECTION
      );
      return collection;
    },
    async updateNationality(nationality) {
      const { data: updated } = await client.put<boolean>(
        Routes.NATIONALITY,
        nationality
      );
      return updated;
    },
    async deleteNationality(nationality) {
      const { data: deleted } = await client.delete<boolean>(
        Routes.NATIONALITY,
        {
          params: {
            nationality,
          },
        }
      );

      return deleted;
    },
  };
}
