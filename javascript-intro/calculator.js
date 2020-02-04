const money = 12;

if (money >= 15) {
    console.log('buy another pint');
} else if (money >= 5) {
    console.log('buy crisps');
} else {
    console.log('you are poor');
}


//sort of calculator
// let x = prompt("enter first number");
// let operator = prompt("enter: plus, minus, multiply, divide. Note spelling mistakes will not work.")
// let y = prompt("enter second number");

// let parseX = parseFloat(x);
// let parseY = parseFloat(y);

// if (operator === 'plus') {
//     alert(parseX + parseY);
// } else if  (operator === 'minus') {
//     alert(parseX - parseY);
// } else if (operator === 'multiply') {
//     alert(parseX * parseY);
// } else if (operator === 'divide') {
//     alert(parseX / parseY);
// }

// let again = prompt("go again?");


const calculator = () => {
    const x = prompt("enter first number");
    const operator = prompt("enter: +,-,*,/")
    const y = prompt("enter second number");

    const parseX = parseFloat(x);
    const parseY = parseFloat(y);

    switch(operator){
        case "+":
            alert(parseX + parseY);
        case "-":
            alert(parseX + parseY);
        case "*":
            alert(parseX * parseY);
        case "/":
            alert(parseX / parseY);
        default:
            alert("error");
    }

    // if (operator === '+') {
    //     alert(parseX + parseY);
    // } else if  (operator === '-') {
    //     alert(parseX - parseY);
    // } else if (operator === '*') {
    //     alert(parseX * parseY);
    // } else if (operator === '/') {
    //     alert(parseX / parseY);
    // }

}

for (let i = 0; i < 10; i++) {
    const again = prompt('calculate? y/n');
    if (again === 'y') {
        calculator();
    } else {
        break;
    } 
}

//can be done in a while loop, I think if you don't do function thing



