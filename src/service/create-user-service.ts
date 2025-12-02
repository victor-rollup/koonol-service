import createClient from '../api/client';
import { USER } from '../enum/user.enum';
import { IEmployeeInformation } from '../model/employee.model';
import { IUserConnection, IUserCreate } from '../model/user.model';

export default function (baseURL: string) {
  const client = createClient(baseURL);
  return {
    async signIn(credentials: IUserCreate) {
      const { data: connection } = await client.post<IUserConnection>(
        USER.ConnectAccount,
        credentials
      );

      return connection;
    },
    async signUp(employee: IEmployeeInformation, credentials: IUserCreate) {
      const { data: connection } = await client.post<IUserConnection>(
        USER.CreateAccount,
        {
          employee,
          credentials,
        }
      );

      return connection;
    },
    async authenticate(nickname: string) {
      const { data: hasAccount } = await client.get<boolean>(
        USER.AuthenticateNickname,
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
