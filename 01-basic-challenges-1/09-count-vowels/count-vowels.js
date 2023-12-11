const countVowels = (str) => {
    const formattedStr = str.toLowerCase();
    let count = 0;
    for (const char of formattedStr) {
        if (
            char === 'a' ||
            char === 'e' ||
            char === 'i' ||
            char === 'o' ||
            char === 'u'
        ) {
            count++;
        }
    }

    return count;
}

module.exports = countVowels;