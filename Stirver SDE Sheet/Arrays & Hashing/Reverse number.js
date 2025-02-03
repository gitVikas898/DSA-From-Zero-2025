function reverseNumber(x){
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;

    const sign = x < 0 ? -1 : 1;

    const reversedNumber = parseInt(String(Math.abs(x)).split("").reverse().join(""))*sign;
    
    if(reverseNumber <INT_MIN || reversedNumber >INT_MAX){
        return 0;
    }
    return reversedNumber;
}

console.log(reverseNumber(-123));