// const removeDuplicates = (arr) => {
//     const uniqueArr = [];

//     for (const el of arr) {
//         if (!uniqueArr.includes(el)) {
//             uniqueArr.push(el);
//         }
//     }

//     return uniqueArr;
// }

const removeDuplicates = (arr) => {
    return Array.from(new Set(arr))
}

// console.log(removeDuplicates([1, 3, 2, 3, 10, 10]));
module.exports = removeDuplicates;