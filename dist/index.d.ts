export default function (baseURL: string): {
    account: {
        signIn(credentials: import("./model/user.model").IUserCreate): Promise<import("./model/user.model").IUserConnection>;
        signUp(employee: import("./model/employee.model").IEmployeeInformation, credentials: import("./model/user.model").IUserCreate): Promise<import("./model/user.model").IUserConnection>;
        authenticate(nickname: string): Promise<boolean>;
    };
};
