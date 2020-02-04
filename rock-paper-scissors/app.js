// creat the player and computer as variables
// 1. get player move
    //prompt, user input their move
// 2. get computer move
    //use a random number to select a move from array
// 3. check result using both moves
    //if to check winner 
        // if same drawer,
        // paper beats rock, rock beats scissors, scissors beats pper
        //player wins, comp wins or drawer
// 4. display result
    //alert
// 5. reset game (bonus)
    //ask if user wants to play again

//EXTENSION - display scores to user 


//GAME MATRIX
let userScore = 0;
let compScore = 0;

const choiceMatrix = [
    
];


const game = () => {
    const user1 = prompt('pick rock/paper/scissors');
    const options = ['rock','paper','scissors'];
    const index = Math.floor(Math.random() * options.length);
    const user2 = options[index];

    if (user1 === user2) {
        alert("it's a tie!");
    } else if (user1 === 'rock' && user2 === 'paper' || user1 === 'paper' && user2 === 'scissors' || user1 === 'scissors' && user2 === 'rock' ) {
        alert("computer wins");
        compScore += 1;
    } else if (user1 === 'rock' && user2 === 'scissors' || user1 === 'paper' && user2 === 'rock' || user1 === 'scissors' && user2 === 'paper') {
        alert("user wins");
        userScore += 1;
    } else {
        alert("error");
    }
    return getResult(userMove, computerMove);
}

const again = () => {
    const playAgain = prompt('play again? (yes/no)');
    if(playAgain === 'yes'){
        game();
        again();
    }
}

game();
again();
console.log(`User Score: ${userScore}`);
console.log(`Computer Score: ${compScore}`);