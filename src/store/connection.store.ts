import { proxy } from 'valtio';
import { IUserConnection } from '../model/user.model';

export default function (constructor?: IUserConnection) {
  let connection = proxy<IUserConnection>(constructor);

  return {
    getConnection() {
      return connection;
    },
    setConnection(value: IUserConnection) {
      connection = value;
    },
  };
}
