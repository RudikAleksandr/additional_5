module.exports = function check(str, bracketsConfig) {
    var objBracketsConfig = {};
    var stackBrackets = [];
    str = str.split("");
    bracketsConfig.forEach(v => {
        if (v[0] == v[1]) {
            objBracketsConfig[v[0]] = v[0] + v[0];
            let n = 0;
            str = str.map((sv, i) => sv == v[0] && n++ % 2 != 0 ? v[0] + v[0] : sv);
        } else {
            objBracketsConfig[v[0]] = v[1];
        }
    });

    for (let i = 0; i < str.length; i++) {
        if (str[i] in objBracketsConfig) {
            stackBrackets.push(str[i]);
        }
        else if (objBracketsConfig[stackBrackets.pop()] != str[i]) {
            return false;
        }
    }
    if (stackBrackets.length != 0) {
        return false;
    }
    return true;
}
