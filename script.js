/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 */

// 11~20
function firstLast6(arr) {
    if (arr.indexOf(6) == 0 || arr.lastIndexOf(6) == arr.length - 1) {
        return true;
    } else {
        return false;
    }
}

function has23(arr) {
    if (arr.includes(2) || arr.includes(3)) {
        return true;
    } else {
        return false;
    }
}

function fix23(arr) {
    if (arr[arr.indexOf(2) + 1] == 3) {
        arr[arr.indexOf(2) + 1] = 0;
    } else if (arr[arr.lastIndexOf(2) + 1] == 3) {
        arr[arr.lastIndexOf(2) + 1] = 0;
    }
    return arr;
}

function countYZ(str) {
    let words = str.toLowerCase().split(" ");
    let count = 0;
    words.forEach(element => {
        if (element.endsWith("y") || element.endsWith("z")) {
            count++;
        }
    });
    return count;
}

function endOther(str1, str2) {
    if (str1.toLowerCase().endsWith(str2.toLowerCase()) || str2.toLowerCase().endsWith(str1.toLowerCase())) {
        return true;
    }
    return false;
}

function starOut(str) {
    let finalStr = "";

    while (str.includes("*")) {
        finalStr += str.substring(0, str.indexOf("*") - 1);
        str = str.substring(str.indexOf("*"));
        while (str.charAt(1) == "*") {
            str = str.substring(1);
        }
        str = str.substring(2);
    }

    finalStr += str

    return finalStr;
}

function getSandwich(str) {
    str = str.substring(str.indexOf("bread"), str.lastIndexOf("bread"));
    return str.substring(5);
}

function canBalance(arr) {
    for (let i = 0; i < arr.length; i++) {
        let right = 0;
        let left = 0;

        for (let r = 0; r <= i; r++) {
            right += arr[r];
        }
        for (let l = i + 1; l < arr.length; l++) {
            left += arr[l];
        }

        if (right == left) {
            return true;
        } else if (right > left) {
            return false
        }

    }
}

function countClumps(arr) {
    let clumps = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            clumps++;
            while (arr[i] == arr[i + 1]) {
                i++
            }
        }
    }
    return clumps
}

function sameEnds(str) {
    let ends = "";
    if (str.length % 2 == 1) {
        str = str.substring(0, str.length / 2) + str.substring((str.length / 2) + 1)
    }
    for (let i = str.length / 2; i > 0; i--) {
        if (str.substring(0, i) == str.substring(str.length - i)) {
            ends = str.substring(0, i);
            break;
        }
    }
    return ends;
}

// F/M/R
function all_even(arr) {
    return arr.filter(num => num % 2 == 0);
}

function no_space(arr) {
    return arr.filter(word => !word.includes(" "));
}

function all_positive(arr) {
    return arr.filter(arr2 => arr2.every(num => num % 2 == 0));
}

function same_vowels(arr) {
    return arr.filter(str => {
        let vowels = str.match(/[aeiou]/g);
        return vowels.every(vowel => vowel == vowels[0]);
    })
}

function times_ten(arr) {
    return arr.map(num => num * 10);
}

function shift_right(arr) {
    arr.unshift(arr[arr.length - 1]);
    arr.pop();
    return arr
}

function no_vowels(arr) {
    return arr.map(str => str.replaceAll(/[bcdfghjklmnpqrstvwxyz]/gi, ""));
}

function double_matrix(arr) {
    return arr.map(arr => arr.map(num => num * 2));
}

function sum_nums(arr) {
    return arr.reduce((sum, num) => sum + num);
}

function product_matrix(arr) {
    return arr.reduce((product, arr) => product * arr.reduce((product, num) => product * num, 1), 1);
}

function average(arr) {
    return arr.reduce((sum, num) => sum + num) / arr.length;
}

function lucky_numbers(arr) {
    let lastNum = arr.pop();
    let message = arr.reduce((str, num) => str + num + ", ", "Your lucky numbers are: ");
    message +=  "and " + lastNum;

    return message;
}