const isPalindrome = require("../isPalindrome.js");

test("Test isPalindrome", () => {
    expect(isPalindrome("level")).toBe(true);
    expect(isPalindrome("civic")).toBe(true);
    expect(isPalindrome("racecaR")).toBe(true);
    expect(isPalindrome("  racecaR  ")).toBe(true);
    expect(isPalindrome("  rasecaR  ")).toBe(false);
});