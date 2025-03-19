const isAnagram = require("../isAnagram.js");

test("Test isAngram", () => {
    expect(isAnagram("listen", "silent")).toBe(true);
    expect(isAnagram("hello", "world")).toBe(false);
});
