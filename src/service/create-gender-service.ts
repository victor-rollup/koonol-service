import createClient from '../api/create-client';
import { Routes } from '../enum/routes.enum';
import IGenderService from '../interface/gender-service.interface';
import { ICreationResponse } from '../model/creation.model';
import { IGenderResponse } from '../model/gender.model';

export default function (baseURL: string): IGenderService {
  const client = createClient(baseURL);
  return {
    async createGender(gender) {
      const { data } = await client.post<ICreationResponse>(Routes.GENDER, gender);
      return data;
    },
    async getGenderById(id) {
      const { data: gender } = await client.get<IGenderResponse>(
        Routes.GENDER,
        {
          params: {
            id,
          },
        }
      );
      return gender;
    },
    async getGenderCollection() {
      const { data: collection } = await client.get<IGenderResponse[]>(
        Routes.GENDER_COLLECTION
      );

      return collection;
    },
    async updateGender(gender) {
      const { data } = await client.put<boolean>(Routes.GENDER, gender);
      return data;
    },
    async deleteGender(gender) {
      const { data } = await client.delete<boolean>(Routes.GENDER, {
        params: {
          gender,
        },
      });
      return data;
    },
  };
}
