import type { IEmployeeInformation } from '../model/employee.model';
import type { IUserConnection, IUserCreate } from '../model/user.model';

export default interface IUserService {
  signIn(credentials: IUserCreate): Promise<IUserConnection>;
  signUp(
    employee: IEmployeeInformation,
    credentials: IUserCreate
  ): Promise<IUserConnection>;
  authenticate(nickname: string): Promise<boolean>;
}
