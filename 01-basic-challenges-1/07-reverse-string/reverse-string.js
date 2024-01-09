const reverseString = (str) => {
    let rvstr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        rvstr += str[i]
    }

    return rvstr
}

// const reverseString = (str) => {
//     const reverse = str.split('').reverse().join('');
//     return reverse;
// }
module.exports = reverseString;