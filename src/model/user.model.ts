export interface IUserCreate {
  nickname: string;
  password: string;
}

export interface IUserUpdate extends Partial<IUserCreate> {}

export interface IUserResponse extends IUserCreate {
  id: number;
}

export interface IUserConnection {
  token: string;
}
