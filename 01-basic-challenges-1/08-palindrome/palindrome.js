// const isPalindrome = (str) => {
//     const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     console.log(formattedStr)
//     const reversedStr = formattedStr.split('').reverse().join('');

//     return formattedStr === reversedStr;
// }

const isAlphaNumeric = function (char) {
    // using the unicode character to determine whether the input char is alphanumeric
    const code = char.charCodeAt(0);
    return (code >= 48 && code <= 57) // check 0-9
        || (code >= 97 && code <= 122)// check a-z
}

const removeNonAlphanumeric = function (str) {
    let formattedStr = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (isAlphaNumeric(char)) {
            formattedStr += char;
        }
    }

    return formattedStr;
}

const reverseString = function (str) {
    return str.split('').reverse().join('');
}

const isPalindrome = function (str) {
    const formattedStr = removeNonAlphanumeric(str.toLowerCase());

    const reversedStr = reverseString(formattedStr);

    return reversedStr === formattedStr;
}

module.exports = isPalindrome;
// isPalindrome('madam m')