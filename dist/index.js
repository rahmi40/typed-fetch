"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = request;
exports.get = get;
exports.post = post;
exports.put = put;
exports.del = del;
async function request(url, options = {}) {
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
        const requestInit = {
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
        const data = (await response.json());
        return {
            ok: true,
            status: response.status,
            data,
        };
    }
    catch (error) {
        return {
            ok: false,
            error: {
                message: error instanceof Error ? error.message : "An unknown error occurred",
            },
        };
    }
}
async function get(url, options = {}) {
    return request(url, {
        ...options,
        method: "GET",
    });
}
async function post(url, body, options = {}) {
    return request(url, {
        ...options,
        method: "POST",
        body,
    });
}
async function put(url, body, options = {}) {
    return request(url, {
        ...options,
        method: "PUT",
        body,
    });
}
async function del(url, options = {}) {
    return request(url, {
        ...options,
        method: "DELETE",
    });
}
//# sourceMappingURL=index.js.map