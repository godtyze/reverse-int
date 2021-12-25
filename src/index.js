module.exports = function reverse(n) {
    let nToString = String(n);
    let res = '';

    for (let i = 0; i < nToString.length; i++) {
        res = `${nToString[i]}${res}`;
    }
    return parseInt(res);
}
