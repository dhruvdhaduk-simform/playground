function camelCase(sentence) {
    let words = sentence.split(" ").map((word, i) => {
        if (word.trim().length === 0) {
            return null;
        }
        word = word.toLowerCase();
        let firstChar = word[0];
        if (i > 0) {
            firstChar = firstChar.toUpperCase();
        }

        return firstChar + word.substring(1);
    });



    return words.filter(word => word !== null).join("");
}

module.exports = camelCase;