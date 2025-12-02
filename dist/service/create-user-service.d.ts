import { IEmployeeInformation } from '../model/employee.model';
import { IUserConnection, IUserCreate } from '../model/user.model';
export default function (baseURL: string): {
    signIn(credentials: IUserCreate): Promise<IUserConnection>;
    signUp(employee: IEmployeeInformation, credentials: IUserCreate): Promise<IUserConnection>;
    authenticate(nickname: string): Promise<boolean>;
};
