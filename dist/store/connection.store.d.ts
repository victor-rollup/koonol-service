import { IUserConnection } from '../model/user.model';
export default function (constructor?: IUserConnection): {
    getConnection(): IUserConnection;
    setConnection(value: IUserConnection): void;
};
