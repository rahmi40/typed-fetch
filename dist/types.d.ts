export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
export type RequestOptions = {
    method?: HttpMethod;
    query?: Record<string, string>;
    body?: unknown;
    headers?: Record<string, string>;
};
export type RequestSuccess<T> = {
    ok: true;
    data: T;
    status: number;
};
export type RequestFailure = {
    ok: false;
    error: {
        message: string;
    };
    status?: number;
};
export type RequestResult<T> = RequestSuccess<T> | RequestFailure;
//# sourceMappingURL=types.d.ts.map