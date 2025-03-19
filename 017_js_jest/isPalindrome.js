function isPalindrome(str) {
    const str1 = str.toUpperCase().split("").filter((c) => c !== ' ').join("");
    const str2 = str1.split("").reverse().join("");
    return str1 === str2;
}

module.exports = isPalindrome;