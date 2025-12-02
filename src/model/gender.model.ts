export interface IGenderCreate {
  name: string;
  description?: string | null;
}

export interface IGenderUpdate extends Partial<IGenderCreate> {}

export interface IGenderResponse extends IGenderCreate {
  id: number;
}
