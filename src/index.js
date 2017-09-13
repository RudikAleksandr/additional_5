module.exports = function check(str, bracketsConfig) {
    var stackOpenBrakets = [];

    for (let i = 0, flagBraket = true; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (bracketsConfig[j][0] === str[i] && bracketsConfig[j][0] === bracketsConfig[j][1]) {
                if (flagBraket) {
                    stackOpenBrakets.push(str[i]);
                    flagBraket = false;
                    break;
                }
                else {
                    flagBraket = true;
                    if (stackOpenBrakets.pop() !== bracketsConfig[j][0]) {
                        return false;
                    }
                }
            }
            else if (bracketsConfig[j][0] === str[i]) {
                stackOpenBrakets.push(str[i]);
                break;
            }
            else if (bracketsConfig[j][1] === str[i]) {
                if (stackOpenBrakets.pop() !== bracketsConfig[j][0]) {
                    return false;
                }
            }
        }
    }
    if (stackOpenBrakets.length != 0) {
        return false;
    }

    return true;
}
