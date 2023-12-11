// const findMaxNumber = (numArr) => {
//     return Math.max(...numArr);
// }

// console.log(findMaxNumber([2, 3, 5, 23]));

module.exports = findMaxNumber;

function findMaxNumber(numArr) {
    let maxNum = numArr[0];

    for (let i = 0; i < numArr.length; i++) {
        // console.log(numArr[i]);
        if (numArr[i] > maxNum) {
            maxNum = numArr[i]
        }
    }

    return (maxNum);
}