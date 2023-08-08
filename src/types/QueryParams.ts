export type Ordering = "name" | "released" | "added" | "created" | "updated" | "rating" | "metacritic";

export interface QueryParamGamesList {
    page?: number | string;
    page_size?: number;
    search?: string;
    search_precise?: boolean;
    platforms?: string;
    stores?: string;
    genres?: string;
    dates?: string;
    ordering?: Ordering;
}