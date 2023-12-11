// function countOccurrences(str, char) {
//     let count = 0;
//     let caseInsensitive = str.toLowerCase();

//     for (const string of caseInsensitive) {
//         console.log(string);
//         if (string === char) {
//             count++;
//         }
//     }

//     return count;
// }

function countOccurrences(str, char) {

    const count = str.toLowerCase().split(char);
    console.log(count);
    return count.length - 1;
}

// console.log(countOccurrences('Hello', "h"));

module.exports = countOccurrences;