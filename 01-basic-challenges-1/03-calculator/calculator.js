const calculator = (a, b, operator) => {
    let result;
    // if (operator === "+") return a + b
    // if (operator === "-") return a - b
    // if (operator === "/") return a / b
    // if (operator === "*") return a * b
    // else {
    //     console.log("Error")
    //     throw Error("Invalid operator");
    // }

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '/':
            result = a / b;
            break;
        case '*':
            result = a * b;
            break;
        default:
            throw new Error("Invalid operator")
    }

    return result;
}

module.exports = calculator;