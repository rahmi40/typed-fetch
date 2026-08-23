"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
async function runTests() {
    console.log("GET TEST");
    const getResult = await (0, index_1.request)("https://jsonplaceholder.typicode.com/posts/1");
    if (getResult.ok) {
        console.log("GET successful!");
        console.log("Title:", getResult.data.title);
        console.log("Status:", getResult.status);
    }
    else {
        console.log("GET failed:", getResult.error.message);
    }
    console.log("\n POST TEST");
    const postResult = await (0, index_1.request)("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "My test post",
            body: "Testing typed-fetch",
            userId: 1,
        }),
    });
    if (postResult.ok) {
        console.log("POST successful!");
        console.log("Created ID:", postResult.data.id);
        console.log("Status:", postResult.status);
    }
    else {
        console.log("POST failed:", postResult.error.message);
    }
    console.log("\n PUT TEST");
    const putResult = await (0, index_1.request)("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify({
            title: "Updated title",
            body: "Updated body",
            userId: 3,
        }),
    });
    if (putResult.ok) {
        console.log("PUT successful!");
        console.log("Updated title:", putResult.data.title);
        console.log("Status:", putResult.status);
    }
    else {
        console.log("PUT failed:", putResult.error.message);
    }
    console.log("\n DELETE TEST");
    const deleteResult = await (0, index_1.request)("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
    });
    if (deleteResult.ok) {
        console.log("DELETE successful!");
        console.log("Status:", deleteResult.status);
    }
    else {
        console.log("DELETE failed:", deleteResult.error.message);
    }
    console.log("\n QUERY PARAMETER TEST");
    const queryResult = await (0, index_1.request)("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
        query: {
            userId: "1",
        },
    });
    if (queryResult.ok) {
        console.log("Query parameters successful!");
        console.log("Number of posts:", queryResult.data.length);
    }
    else {
        console.log("Query failed:", queryResult.error.message);
    }
    console.log("\n CUSTOM HEADER TEST");
    const headerResult = await (0, index_1.request)("https://jsonplaceholder.typicode.com/posts/1", {
        headers: {
            "X-Test-Header": "typed-fetch-test",
        },
    });
    if (headerResult.ok) {
        console.log("Custom headers successful!");
        console.log("Status:", headerResult.status);
    }
    else {
        console.log("Header test failed:", headerResult.error.message);
    }
    console.log("\n ERROR TEST");
    const errorResult = await (0, index_1.request)("https://jsonplaceholder.typicode.com/invalid-url");
    if (!errorResult.ok) {
        console.log("Error handled successfully!");
        console.log("Error:", errorResult.error.message);
    }
    else {
        console.log("Unexpected success!");
    }
}
runTests();
//# sourceMappingURL=test.js.map