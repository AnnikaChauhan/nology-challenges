console.log('loops');

// basic for loop
for (let i = 1; i < 5; i++) {
    console.log(i);
}

// basic while loop
let j = 0;
while (j < 5){
    console.log(j);
    j++;
}

let userInput = "yes";
while (userInput === "yes") {
    userInput = prompt("do you want to keep the loop?");
}