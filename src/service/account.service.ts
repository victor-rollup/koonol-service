import createClient from '../api/client';
import { ACCOUNT } from '../enum/account.enum';
import { IEmployeeInformation } from '../model/employee.model';
import { IUserConnection, IUserCreate } from '../model/user.model';
import connectionStore from '../store/connection.store';

export default function (baseURL: string) {
  const client = createClient(baseURL);
  return {
    async signIn(credentials: IUserCreate) {
      const { data: connection } = await client.post<IUserConnection>(
        ACCOUNT.ConnectAccount,
        credentials
      );

      return connectionStore(connection);
    },
    async signUp(employee: IEmployeeInformation, credentials: IUserCreate) {
      const { data: connection } = await client.post<IUserConnection>(
        ACCOUNT.CreateAccount,
        {
          employee,
          credentials,
        }
      );

      return connectionStore(connection);
    },
    async authenticate(nickname: string) {
      const { data: hasAccount } = await client.get<boolean>(
        ACCOUNT.AuthenticateNickname,
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
