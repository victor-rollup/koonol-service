import createClient from '@/api/create-client';
import { Routes } from '@/enum/routes.enum';
import IUserService from '@/interface/user-service.interface';
import { IUserConnection } from '@/model/user.model';

export default function (baseURL: string): IUserService {
  const client = createClient(baseURL);
  return {
    async signIn(credentials) {
      const { data: connection } = await client.post<IUserConnection>(
        Routes.CONNECT_ACCOUNT,
        credentials
      );

      return connection;
    },
    async signUp(employee, credentials) {
      const { data: connection } = await client.post<IUserConnection>(
        Routes.CREATE_ACCOUNT,
        {
          employee,
          credentials,
        }
      );

      return connection;
    },
    async authenticate(nickname) {
      const { data: hasAccount } = await client.get<boolean>(
        Routes.AUTHENTICATE_NICKNAME,
        {
          params: {
            nickname,
          },
        }
      );

      return hasAccount;
    },
  };
}
