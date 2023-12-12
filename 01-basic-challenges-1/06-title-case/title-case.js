const titleCase = (str) => {
    const words = str.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = `${words[i][0].toUpperCase()}${words[i].slice(1).toLowerCase()}`
        // console.log(words[i]);
    }

    return words.join(' ');
}
// console.log(titleCase("hello world!"));
module.exports = titleCase;