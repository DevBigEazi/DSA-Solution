const findMaxNumber = function (numArr) {
    // return Math.max(...numArr);

    let max = numArr[0];
    for (let i = 1; i < numArr.length; i++) {
        if (numArr[i] > max) {
            max = numArr[i]
        }
    }
    return max
}

module.exports = findMaxNumber;