/**
 * @param {number} num
 * @return {string}
 */

// my own solution
var numberToWords = function(num) {
    var dict = { 1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five',
        6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', 10: 'Ten',
        11: 'Eleven', 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen',
        15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen', 18: 'Eighteen',
        19: 'Nineteen', 20: 'Twenty', 30: 'Thirty', 40: 'Forty',
        50: 'Fifty', 60: 'Sixty', 70: 'Seventy', 80: 'Eighty',
        90: 'Ninety'};
    var str = '';

    if (num === 0) {
        return 'Zero';
    }

    for (var i = 9; i >= 0;) {
        var most = Math.floor(num / Math.pow(10, i));
        num = num % Math.pow(10, i);

        if (i === 9 && most > 0) {
            str += dict[most] + ' Billion ';
        }

        if (i === 6 && most > 0) {
            str += threeDigits(most, dict) + ' Million ';
        }

        if (i === 3 && most > 0) {
            str += threeDigits(most, dict) + ' Thousand ';
        }

        if (i === 0 && most > 0) {
            str += threeDigits(most, dict);
        }

        if (num === 0) {
            str = str.trim();
            break;
        }

        i -= 3;
    }

    return str;
};

var threeDigits = function(num, dict) {
    var hundred = 0;
    var rem = 0;
    var str = '';

    if (num === 0) {
      return '';
    } else if (num < 100) {
        str = twoDigits(num, dict);
    } else {
        hundred = Math.floor(num / 100);
        str = dict[hundred] + ' Hundred';
        rem = num % 100;

        if (rem <= 10 && rem > 0) {
            str += ' ' + dict[rem];
        } else if (rem > 10) {
            str += ' ' + twoDigits(rem, dict);
        }
    }

    return str;
};

var twoDigits = function twoDigits(num, dict) {
    var str = '';
    var least = Math.floor(num % 10);
    var most = num - least;

    if (least === 0 || num <= 20) {
        str += dict[num];
    } else {
        str += dict[most] + ' ' + dict[least];
    }

    return str;
}


// a more concise way
var zeroToTwenty = ['', 'One', 'Two', 'Three', 'Four', 'Five',
     'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve',
     'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen',
     'Eighteen', 'Nineteen', 'Twenty'];
var twentyToNinety = ['', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
var thousand = ['', 'Thousand', 'Million', 'Billion'];

var numberToWords = function(num) {
    var str = '';

    if (num === 0) {
        return 'Zero';
    }

    for (var i = 0; num > 0; i++) {
        var h = num % 1000;
        if (h > 0) { // in case 1,000,000
            str = helper(h) + thousand[i] + ' ' + str;
        }
        num = Math.floor(num / 1000);
    }

    return str.trim();
};

function helper(num) {
    if (num === 0) {
        return '';
    } else if (num <= 20) {
        return zeroToTwenty[num] + ' ';
    } else if (num < 100) {
        var h = Math.floor(num / 10);
        return twentyToNinety[h - 1] + ' ' + helper(num % 10);
    } else {
        var h = Math.floor(num / 100);
        return zeroToTwenty[h] + ' Hundred ' + helper(num % 100);
    }
}
