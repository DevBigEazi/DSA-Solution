// const calculator = (a, b, operator) => {
//     let result = 0;

//     if (operator === "+") {
//         result = a + b;
//     } else if (operator === "-") {
//         result = a - b;
//     } else if (operator === "*") {
//         result = a * b;
//     } else if (operator === "/") {
//         result = a / b;
//     } else {
//         throw new Error("Invalid operator");
//     }

//     return result;
// }

const calculator = (a, b, operator) => {
    let result = 0;

    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            throw new Error("Invalid operator");
    }

    return result;
}

module.exports = calculator;