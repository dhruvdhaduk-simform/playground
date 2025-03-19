function isAnagram(word1, word2) {
    let chars1 = word1.split("");
    let chars2 = word2.split("");

    chars1.sort();
    chars2.sort();

    word1 = chars1.join("");
    word2 = chars2.join("");

    return word1 === word2;
}

module.exports = isAnagram;