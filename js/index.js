var number = [1, 3, 5, 9];
var math = function (arr) {
    let result = 0;
    for (let value of number ) {
        result += value;
    }
    return result;
}
console.log(math(number));