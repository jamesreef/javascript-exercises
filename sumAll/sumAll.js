const sumAll = function(num1, num2) {

    if ((num1 < 0) || (num2 < 0) || (typeof num1 !== 'number') || (typeof num2 !== 'number')) {
        return 'ERROR'
    }

    let sum = 0;

    if (num1 > num2) {
        for (; num2 <= num1; num2++) {
            sum+= num2;
        }
        return sum;
    }
    
    for (; num1 <= num2; num1++) {
        sum += num1;
    }
    return sum;
}

module.exports = sumAll
