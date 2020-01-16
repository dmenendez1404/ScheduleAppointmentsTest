export interface Entity {
    id?: number;
    createdAt?: number,
    updatedAt?: number
}

export interface PaginatedResolve<T> {
    count: number,
    page: number,
    countPages: number,
    limit: number,
    data: T[]
}