module.exports = function toReadable(number) {
    function convertTwoValues(num) {
        if (num < 20 || num % 10 === 0) {
            return obj[num];
        } else {
            return obj[num - (num % 10)] + " " + obj[num % 10];
        }
    }

    const obj = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    if (number < 100) {
        return convertTwoValues(number);
    } else {
        if (number % 100 === 0) {
            return `${obj[String(number)[0]]} hundred`;
        }
        return `${obj[String(number)[0]]} hundred ${convertTwoValues(
            number % 100
        )}`;
    }
};
