// const addition = (num1, num2) => {
//     return num1 + num2;
// }

// //you can do this shorthand if it's returning
// const shortAdd = (num1, num2) => num1 + num2;

// console.log(addition);
// const result = addition(12,43);
// console.log(result);

// const shortResult = shortAdd(10,13);
// console.log(shortResult);

const loom = (thread, dye) => {
    const cloth = `Cloth of ${dye} colour. Made with ${thread} thread.`;
    return cloth;
}

console.log(loom('cotton','red'));

const sqrt = (number) => {
    return Math.sqrt(number);
}

console.log(sqrt(9));

const isInt = (number) => {
    if(Number.isInteger(number)){
        return true;
    } else {
        return false;
    }
}
console.log(isInt(2));