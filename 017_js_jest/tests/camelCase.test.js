const camelCase = require("../camelCase.js");

test("Test camelCase function", () => {
    expect(camelCase("hello world")).toBe("helloWorld");
    expect(camelCase("hello   world    ")).toBe("helloWorld");
    expect(camelCase("hello   world  hi   ")).toBe("helloWorldHi");
    expect(camelCase("     hello   world  hi   ")).toBe("helloWorldHi");
    
});