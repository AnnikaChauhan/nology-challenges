//const user1 = prompt('User 1 pick: rock, paper or scissors');
const options = ['rock','paper','scissors'];
const index = Math.floor(Math.random() * options.length);
const user2 = options[index];

console.log(user2);

if (user1 === 'rock' && user2 === 'rock'){
    alert("it's a tie!");
} else if (user1 === 'rock' && user2 === 'paper') {
    alert("computer wins");
} else if (user1 === 'rock' && user2 === 'scissors') {
    alert("user wins");
} else if (user1 === 'paper' && user2 === 'paper'){
    alert("it's a tie!");
} else if (user1 === 'paper' && user2 === 'rock') {
    alert("user wins");
} else if (user1 === 'paper' && user2 === 'scissors'){
    alert("computer wins");
} else if (user1 === 'scissors' && user2 === 'scissors') {
    alert("it's a tie!");
} else if (user1 === 'scissors' && user2 === 'rock') {
    alert("computer wins");
}  else if (user1 === 'scissors' && user2 === 'paper') {
    alert("user wins");
} else {
    alert("error");
}