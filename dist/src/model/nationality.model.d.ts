export interface INationalityCreate {
    name: string;
    description?: string | null;
}
export interface INationalityUpdate extends Partial<INationalityCreate> {
}
export interface INationalityResponse extends INationalityCreate {
    id: number;
}
