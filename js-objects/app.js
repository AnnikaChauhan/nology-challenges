const user = {
    name: "Ellen Pieterson",
    dob: "02/01/1997",
    email: "ellen@rox.com",
    password: 1
}
// introduces a new element to the object
user.mobileNumber = "0712345678";
console.log(user);

// const objectWithNumbers = {
//     0: "something",
//     1: "something else",
//     2: "another thing"
// }

// const dataGetter = "email";

// console.log(user.name);
// console.log(user[dataGetter]);
// console.log(objectWithNumbers[0]);

// // loop through an object
// for (const key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

//this is now an array
const users = [{
    name: "Andrew",
    dob:"07/06/1968",
    loginDetails: {
        email: "andy@old.com",
        password: "011i3"
    },
    id: 1234567,
    isAdmin: true
}, {
    name: "Sam",
    dob:"07/06/2004",
    loginDetails: {
        email: "sam@young.com",
        password: "tesco"
    },
    id: 34,
    isAdmin: false
}, {
    name: "Sophie",
    dob:"29/10/1990",
    loginDetails: {
        email: "sophie@szmd.com",
        password: "code"
    },
    id: 721255,
    isAdmin: true
}];

//console.log(andy.loginDetails.email);
console.log(users.length);
console.log(users[0]);
console.log(users[0].loginDetails.email);

const names = [];

//loop through an array of objects
users.forEach((user) => {
    console.log(user.name);
    names.push(user.name);
});
//push adds to the end of an array
console.log(names);
//pop removes from the end of an array
names.pop();
console.log(names);
//shift removes from the start of an array
names.shift();
console.log(names);
//unshift adds to the start of an array
names.unshift("Annika");
console.log(names);

// goes to position 1 and takes 1 out
users.splice(1,1);
console.log(users);


const countries = ["australia","belgium","canada","denmark","england"]

console.log(countries.filter(country => country.includes('e')));

console.log(countries.map((country) => `${country} is cold`));

console.log(countries.map((country => country.charAt(0))));

console.log(countries.reduce((accumulator, currentValue) => accumulator + currentValue));

const array1 = [1, 2, 3, 4];
//const reducer = (accumulator, currentValue) => accumulator + currentValue;
const array2 = [5,6,1,4];
console.log(array2.sort());

// 1 + 2 + 3 + 4
//console.log(array1.reduce((accumulator,currentValue) => accumulator + currentValue));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
//console.log(array1.reduce((accumulator,currentValue) => accumulator + currentValue, 5));
//console.log(array1.reduce(reducer, 5));
// expected output: 15

