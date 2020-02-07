window.onload = () => {
    //window.onload = gameStartUp
    // global variables stay global and then everything is a function call

    const userScoreBoard = document.getElementById('userScoreBoard');
    const compScoreBoard = document.getElementById('compScoreBoard');
    const buttons = document.querySelectorAll('.playerChoice');
    const winnerMessage = document.getElementById('winnerMessage');
    const restart = document.getElementById('restart');
    const tie = "it's a tie!";
    const user = "user wins";
    const comp = "computer wins";
    let userScore = 0;
    let compScore = 0;
    const options = ['rock','paper','scissors'];
    const choiceMatrix = [
        [tie, user, comp],
        [comp, tie,user],
        [user, comp, tie]
    ];

    const createEventListeners = (clickButton) => {
        clickButton.onmousedown = () => {
            clickButton.style.backgroundColor = 'green';
        }
        clickButton.onmouseup = () => {
            clickButton.style.backgroundColor = 'initial';
        }
    }

    const getWinner = (playerMove, computerMove) => {}
    const resetGame = () => {}
    const updateScoreboard = (playerScore, computerScore) => {}

    const getComputerChoice = () => {
        const index =  Math.floor(Math.random() * options.length);
        return index;
    }

    const determineWinner = (playerMove,computerMove) => {
        const winner = choiceMatrix[computerMove][playerMove];
    }

    for(let i = 0; i < buttons.length; i++){
        createEventListeners(buttons[i]);
        buttons[i].onclick = () => {
            let playerChoice = buttons[i].value;
            let compChoice = getComputerChoice();
            //console.log(compChoice);
            //console.log(buttons[i].value);
            const winner = choiceMatrix[compChoice][playerChoice];
            winnerMessage.innerText = winner;
            
            if (winner === user) {
                userScore +=1;
                compScore += 0;
                winnerMessage.style.color = 'green';
            } else if (winner === comp) {
                compScore +=1;
                userScore +=0;
                winnerMessage.style.color = 'red';
            } else if (winner === tie) {
                compScore += 0.5;
                userScore += 0.5;
                winnerMessage.style.color = 'black';
            }
            userScoreBoard.innerText = Number(userScore);
            compScoreBoard.innerText = Number(compScore);
        }
    }

    //don't do this
    restart.onclick = () => {
        window.location.reload();
    }
}
