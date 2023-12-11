const titleCase = (str) => {
    const splString = str.split(' ');

    for (let i = 0; i < splString.length; i++) {
        splString[i] = splString[i][0].toUpperCase() + splString[i].slice(1).toLowerCase();
    }

    return splString.join(' ');
}

// function titleCase(str) {
//     return str.replace(/\b\w/g, (match) => match.toUpperCase());
// }

module.exports = titleCase;

