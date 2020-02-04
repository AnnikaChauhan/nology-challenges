//GAME MATRIX
let userScore = 0;
let compScore = 0;
let tieScore = 0;
let numberOfGames = 0;

const tie = "it's a tie!";
const user = "user wins";
const comp = "computer wins";

const choiceMatrix = [
    [tie, user, comp],
    [comp, tie,user],
    [user, comp, tie]
];

const computerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const index =  Math.floor(Math.random() * options.length);
    return index;
}

const playerChoice = () => {
    const player = prompt('pick rock/paper/scissors');
    if (player === 'rock') {
        return 0;
    } else if (player === 'paper') {
        return 1;
    } else if (player === 'scissors') {
        return 2
    }
}

const outcome = () => {
    const winner = choiceMatrix[computerChoice()][playerChoice()];
    if (winner === user) {
        userScore +=1;
    } else if (winner === comp) {
        compScore +=1;
    } else if (winner === tie) {
        tieScore += 1;
    }
    return winner;
}

const again = () => {
    alert(outcome());
    numberOfGames += 1;
    const playA = prompt('play again? (yes/no)');
    if (playA === 'yes') {
        again();
    }
}

again();
console.log(`user score: ${userScore}`);
console.log(`comp score: ${compScore}`);
console.log(`number of ties: ${tieScore}`);
console.log(`number of games: ${numberOfGames}`);
