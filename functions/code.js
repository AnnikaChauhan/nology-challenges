// Write a function that takes in a lower case word and makes it upper case

const UpperCasify = (word) => {
    return word.toUpperCase();
}
console.log(UpperCasify('hello'));

// Write a function that multiplies three numbers together and returns the result
const multiply3n = (num1, num2, num3) => num1 * num2 * num3;
console.log(multiply3n(1,2,1));

// Write a function that reverses a string so it reads backwards
const reverseString = (string) => string.split("").reverse().join("");
console.log(reverseString("hello"));

// Write a function that checks whether a number is greater than 500
    // If the number is greater, return true
    // If the number is less, return false

const numberChecker = (num) => {
    if(num > 500){
        return true;
    } else {
        return false;
    }
}
console.log(numberChecker(5000));

const quickerNumberChecker = (num) => num > 500;
console.log(quickerNumberChecker(300));

// Write a function that takes in a letter and returns the letter before it in the alphabet
const letterBefore = (letter) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const index = alphabet.indexOf(letter);
    const indexBefore = index - 1;
    const newLetter = alphabet.charAt(indexBefore);
    return newLetter;
}
console.log(letterBefore('g'));

const olliesLetterBefore = (letter) => {
    const charCode = letter.charCodeAt(0) - 1;
    return String.fromCharCode(charCode);
}
console.log(olliesLetterBefore('r'));

// EXTENSION:
    // Write a function that takes in a word and a number
        // Print the word out that number of times

const wordMultiplier = (word, multiplier) => {
    for (let i = 0; i < multiplier; i++){
        console.log(word);
    }
}

wordMultiplier('hi',3);