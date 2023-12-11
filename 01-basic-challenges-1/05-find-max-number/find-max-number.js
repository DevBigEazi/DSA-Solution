// const findMaxNumber = function (arr) {
//     // return Math.max.apply(null, arr)
//     return Math.max(...arr)
// }

const findMaxNumber = function (arr) {
    let maxNumber = [0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }

    return maxNumber;
}

console.log(findMaxNumber([4, 2, 5]));

module.exports = findMaxNumber;