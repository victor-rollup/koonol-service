export interface ICustomerCreate {
  name: string;
  lastname: string;
  phone?: string | null;
  email?: string | null;
  taxID?: string | null;
}

export interface ICustomerUpdate extends Partial<ICustomerCreate> {}

export interface ICustomerResponse extends ICustomerCreate {
  id: number;
}
