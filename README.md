# Typed-fetch

A small, type-safe HTTP request library built with TypeScript.

## Features

- Generic `request<T>()` function
- Supports GET, POST, PUT, and DELETE
- Query parameters
- JSON request bodies
- Custom headers
- Typed responses
- Error handling using a discriminated union

## Project Structure

```text
typed-fetch/
src/
    index.ts
    types.ts
    tests/
        test.ts
 dist/
    index.js
    types.js
node_modules
package.json
package-lock.json
tsconfig.json
README.md
```

## Installation

Install the dependencies:

```bash
npm install
```

## Build

Build the project:

```bash
npm run build
```

Check for TypeScript errors:

```bash
npx tsc --noEmit
```

## Basic Usage

The main function is:

```ts
request<T>(url, options);
```

The`<T>` generic defines the expected response type.

## Usage Examples

### 1, Successful GET Request

```ts
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const result = await get<Post>("https://jsonplaceholder.typicode.com/posts/1");

if (result.ok) {
  console.log(result.data.title);
} else {
  console.log(result.error.message);
}
```

### 2, Successful POST Request

```ts
const result = await post("https://jsonplaceholder.typicode.com/posts", {
  title: "My post",
  body: "Testing typed-fetch",
  userId: 1,
});

if (result.ok) {
  console.log("POST successful:", result.data);
} else {
  console.log("POST failed:", result.error.message);
}
```

### 3, Error path

```ts
const result = await request(
  "https://jsonplaceholder.typicode.com/invalid-url",
);

if (result.ok) {
  console.log(result.data);
} else {
  console.log("Error:", result.error.message);
}
```

The library returns errors as `{ok: false}`
instead of throwing them.

## Query parameters

```ts
const result = await request("https://jsonplaceholder.typicode.com/posts", {
  method: "GET",
  query: {
    userId: "1",
  },
});
```

## Custom Headers

```ts
const result = await get("https://jsonplaceholder.typicode.com/posts/1", {
  headers: {
    "X-Test-Header": "typed-fetch",
  },
});
```

## Testing

```bash
      npx tsx src/tests/test.ts
```

    The tests cover GET,POST,PUT,DELETE,query parameters,custom headers, and error handling.
