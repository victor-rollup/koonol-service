import createAccountService from './service/create-user-service';

export default function (baseURL: string) {
  return { account: createAccountService(baseURL) };
}
