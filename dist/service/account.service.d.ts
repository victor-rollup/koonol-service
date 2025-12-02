import { IEmployeeInformation } from '../model/employee.model';
import { IUserConnection, IUserCreate } from '../model/user.model';
export default function (baseURL: string): {
    signIn(credentials: IUserCreate): Promise<{
        getConnection(): IUserConnection;
        setConnection(value: IUserConnection): void;
    }>;
    signUp(employee: IEmployeeInformation, credentials: IUserCreate): Promise<{
        getConnection(): IUserConnection;
        setConnection(value: IUserConnection): void;
    }>;
    authenticate(nickname: string): Promise<boolean>;
};
