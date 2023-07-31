module.exports = function toReadable (number) {
    const numWords = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ];
    const tensWords = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ];

    const twoNumberToWords = (num) => {
        return num < 20 ? numWords[num] : tensWords[Math.floor(num / 10)] + (num % 10 !== 0 ? ' ' + numWords[num % 10] : '');
    }

    const threeNumberToWords = (num) => {
        return numWords[Math.floor(num / 100)] + ' hundred' + (num % 100 !== 0 ? ' ' + twoNumberToWords(num % 100) : '');
    }

    if (number < 0 || number > 999) {
        return 'Number out of range (0-999)';
    }

    if (number === 0) {
        return numWords[0];
    }

    if (number < 100) {
        return twoNumberToWords(number);
    }

    return threeNumberToWords(number);
}
