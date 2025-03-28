function toUperCaseStr(str) {
    str = str.toLowerCase().trim().split('')
    str[0] = str[0].toUpperCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            str[i+1] = str[i+1].toLocaleUpperCase();
        }
    }
    str = str.join('');
    return str;
}

console.log(toUperCaseStr("hello WORLD"));