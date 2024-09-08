const calculator = (a, b, operator) => {
    let result;

    // if (operator === "+") return result = a + b;
    // if (operator === "-") return result = a - b;
    // if (operator === "/") return result = a / b;
    // if (operator === "*") return result = a * b;

    switch (operator) {
        case "+":
            result = a + b
            break;
        case "-":
            result = a - b
            break;
        case "/":
            result = a / b
            break;
        case "*":
            result = a * b
            break;

        default:
            throw Error("Invalid Operator");
    }

    return result;
}

module.exports = calculator;