export interface PaginatedParams {
    page: number;
}

export type PaginatedRequest<P extends PaginatedParams, T> = (
    params: P
) => Promise<T>;