const myArray = [12, 4, 26, 44, 1043, 2];

for (let i = 0; i < myArray.length; i++){
    //console.log(myArray[i]);
}

// same as above - the "for of" loop
for (number of myArray) {
    //console.log(number);
}

//an array method, number could literally be any word
myArray.forEach((number) => {
    //console.log(number);
});

const print = (number) => {
    //console.log(number);
}
myArray.forEach(print);

const state = "mississippi";
// loop through the state and replace all i's with 1's
    // 1. loop through the string
    // 2. if letter equals i then replace with 1
    // 3. console log the new string

    // copies the string into an array
    const stateArray = [...state];
    //console.log(stateArray);

    for (let i = 0; i < stateArray.length ; i++){
        if (stateArray[i] === "i"){
            //console.log(stateArray[i]);
            stateArray[i] = "1";
        }
    }

    //console.log(stateArray.join(''));


// Fizzbuzz

for (let i = 1; i <= 100; i++){
    if ((i % 3) === 0 && (i % 5) === 0) {
        console.log("FizzBuzz");
    } else if ( (i % 5) === 0) {
        console.log("Buzz");
    } else if ( (i % 3) === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

//integer test
//console.log(Number.isInteger(2/3));






// //challenges

// const names = ["Benny", "Anna", "Bjorn", "Anna"];
// // 1. Loop through the names and print each one

// names.forEach((name) => {
//     console.log(name);
// });

// // 2. Print every letter from the second name in the list

// console.log(names[1].split(""));

// [...names[1]].forEach((letter) => {
//     console.log(letter);
// });

// // 3. Loop through the array and print the length of each name

// names.forEach((name) => {
//     console.log(name.length);
// });

// // 4. Use an array method to find the index of the name "Bjorn"

// console.log(names.indexOf("Bjorn"));

// // 5. Loop through the array and print each item in alphabetical order

// //const namesOrder = names.sort();
// names.sort().forEach((person) => {
//     console.log(person);
// });

// // TEST: this keeps the array and sorts
// //console.log(names.sort());

// // EXTENSION
//     // 1. Sort the array by the length of the names, shortest to largest
    
//     // a sort method returns a result
//     const abbaLengthSort = names.sort((a,b) => {
//         return a.length - b.length;
//     });
//     console.log(abbaLengthSort);
    
//     // 2. Only return names that start with a "B"

//     names.forEach((name)=> {
//         if(name.charAt(0) === 'B'){
//             //console.log(name);
//             //console.log([...name]);
//         } else {}
//     });

//     const startsWithB = names.filter((name) => name.startsWith('B'));
//     console.log(startsWithB);

//     // 3. Using the sort and reduce methods, return the word "ABBA" using the array

//     names.sort();
//     names.push(names.shift());
//     const firstLetter = (response, word) => response += word.charAt(0);
//     console.log(names.reduce(firstLetter,''));

//     const numbers = [1,2,3,4,5,6];
//     const sum = numbers.reduce((prev,next) => prev+next);

//     // 4. Using map, print each name adding "the legend" to the end of each.

//     const legends = names.map((name) => `${name} the legend`);
//     console.log(legends);

//     // multi-dimensional arrays

//     const nology = [
//         ["Jonny","Sunny","Annika","Sophie"],
//         ["Andy","Nasir","Sonia","Sam"]
//     ];

//     console.log(nology[0][2]);

