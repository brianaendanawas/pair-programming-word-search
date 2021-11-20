const wordSearch = (letters, word) => { 

    if (letters.length === 0) {
        return false;
    }

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }

    const newArray = [];
    
    for (let i = 0; i< letters.length; i++) {
        for (let j = 0; j< letters[i].length; j++) {
            if (newArray[j] === undefined) {
                newArray.push([]);
                newArray[j][i] = letters[i][j];
            }
        }

        for (l of newArray) {
            if (l.includes(word)) return true;
        }
    }

    return false;

}

module.exports = wordSearch