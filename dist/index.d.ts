import { RequestOptions, RequestResult } from "./types";
export declare function request<T>(url: string, options?: RequestOptions): Promise<RequestResult<T>>;
export declare function get<T>(url: string, options?: Omit<RequestOptions, "method" | "body">): Promise<RequestResult<T>>;
export declare function post<T>(url: string, body?: unknown, options?: Omit<RequestOptions, "method" | "body">): Promise<RequestResult<T>>;
export declare function put<T>(url: string, body?: unknown, options?: Omit<RequestOptions, "method" | "body">): Promise<RequestResult<T>>;
export declare function del<T>(url: string, options?: Omit<RequestOptions, "method" | "body">): Promise<RequestResult<T>>;
//# sourceMappingURL=index.d.ts.map