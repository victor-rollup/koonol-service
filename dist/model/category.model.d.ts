export interface ICategoryCreate {
    name: string;
    description?: string | null;
}
export interface ICategoryUpdate extends Partial<ICategoryCreate> {
}
export interface ICategoryResponse extends ICategoryCreate {
    id: number;
}
