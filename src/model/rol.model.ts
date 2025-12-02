export interface IRolCreate {
  name: string;
  description?: string | null;
}

export interface IRolUpdate extends Partial<IRolCreate> {}

export interface IRolResponse extends IRolCreate {
  id: number;
}
