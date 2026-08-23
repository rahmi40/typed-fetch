import { RequestOptions, RequestResult } from "./types";

export async function request<T>(
  url: string,
  options: RequestOptions = {},
): Promise<RequestResult<T>> {
  try {
    const finalUrl = new URL(url);

    if (options.query) {
      Object.entries(options.query).forEach(([key, value]) => {
        finalUrl.searchParams.set(key, value);
      });
    }

    const headers = new Headers(options.headers);

    if (options.body !== undefined && !headers.has("Content-Type")) {
      headers.set("Content-Type", "application/json");
    }

    const requestInit: RequestInit = {
      method: options.method ?? "GET",
      headers,
    };

    if (options.body !== undefined) {
      requestInit.body = JSON.stringify(options.body);
    }

    const response = await fetch(finalUrl, requestInit);

    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        error: {
          message: `Request failed with status ${response.status}`,
        },
      };
    }

    const data = (await response.json()) as T;

    return {
      ok: true,
      status: response.status,
      data,
    };
  } catch (error) {
    return {
      ok: false,
      error: {
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
    };
  }
}

export async function get<T>(
  url: string,
  options: Omit<RequestOptions, "method" | "body"> = {},
): Promise<RequestResult<T>> {
  return request<T>(url, {
    ...options,
    method: "GET",
  });
}

export async function post<T>(
  url: string,
  body?: unknown,
  options: Omit<RequestOptions, "method" | "body"> = {},
): Promise<RequestResult<T>> {
  return request<T>(url, {
    ...options,
    method: "POST",
    body,
  });
}

export async function put<T>(
  url: string,
  body?: unknown,
  options: Omit<RequestOptions, "method" | "body"> = {},
): Promise<RequestResult<T>> {
  return request<T>(url, {
    ...options,
    method: "PUT",
    body,
  });
}

export async function del<T>(
  url: string,
  options: Omit<RequestOptions, "method" | "body"> = {},
): Promise<RequestResult<T>> {
  return request<T>(url, {
    ...options,
    method: "DELETE",
  });
}
