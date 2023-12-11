// const reverseString = (str) => {
//     return console.log(str.split('').reverse().join(' '));
// }

// reverseString("Hello");

const reverseString = function (str) {

    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

// console.log(reverseString('Hello'));
module.exports = reverseString;
