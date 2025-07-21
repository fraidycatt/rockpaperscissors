const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
  playRound('rock', getComputerChoice()); 
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});
const resultsDiv = document.querySelector('#results');

function random(number) {
        return Math.floor(Math.random() * (number+1));
    }

    
    function getComputerChoice(){
        let computerChoice = random(3);
        let choice;
        if (computerChoice == 0) {
            choice = 'paper';
        }
        else if (computerChoice == 1) {
            choice = 'rock';
        }
        else {
            choice = 'scissors';
        }
        return choice;
    }

    let humanScore = 0;
    let computerScore = 0;

    function playRound(hChoice, cChoice) {
        if (hChoice === 'rock' && cChoice === 'rock') {
            resultsDiv.textContent = `They said 'let those without sin cast the first stone,' and both you and the computer said, 'ok.' Rocks everywhere. Try again.\nYou: ${humanScore}\nComputer: ${computerScore}`;
        }
        else if (hChoice === 'rock' && cChoice === 'paper') {
            computerScore += 1;
            resultsDiv.textContent = `The devious computer covered your rock with its paper, which somehow means it won this round.\nYou: ${humanScore}\nComputer: ${computerScore}`;
        }
        else if (hChoice === 'rock' && cChoice === 'scissors') {
            humanScore += 1;
            resultsDiv.textContent = `You absolutely destroyed the computer's scissors with your rock, caveman style. Brutal.\nYou: ${humanScore}\nComputer: ${computerScore}`;
        }
        else if (hChoice === 'paper' && cChoice === 'paper') {
            resultsDiv.textContent = `Two pieces of paper make... a draw, or some other witty pun.\nYou: ${humanScore}\nComputer: ${computerScore}`;
        }
        else if (hChoice === 'paper' && cChoice === 'scissors') {
            computerScore += 1;
            resultsDiv.textContent = `The computer slashed your paper in two with its scissors, samurai style.\nYou: ${humanScore}\nComputer: ${computerScore}`;
        }
        else if (hChoice === 'paper' && cChoice === 'rock') {
            humanScore += 1;
            resultsDiv.textContent = `The computer's rock is eclipsed by your paper. No one knows it exists any longer, which perhaps is the same as nonexistence.\nYou: ${humanScore}\nComputer: ${computerScore}`;
        }
        else if (hChoice === 'scissors' && cChoice === 'scissors') {
            resultsDiv.textContent = `You each drew scissors and thought... actually, this is a lot of scary knives. It's a draw this time.\nYou: ${humanScore}\nComputer: ${computerScore}`;
        }
        else if (hChoice === 'scissors' && cChoice === 'rock') {
            computerScore += 1;
            resultsDiv.textContent = `Your scissors have been dented to mere scraps of metal by the computer's rock. Jeeeeez.\nYou: ${humanScore}\nComputer: ${computerScore}`;
        }
        else if (hChoice === 'scissors' && cChoice === 'paper') {
            humanScore += 1;
            resultsDiv.textContent = `Dramatically you draw your scissors across the computer's paper, which stays intact for a single moment-- then falls to the ground in two pieces. Like Darth Maul.\nYou: ${humanScore}\nComputer: ${computerScore}`;
        }

        if (humanScore >= 5) {
            resultsDiv.textContent = "You have managed to win against a computer, for all its programming and code. Might you challenge a human being next?";
            }
        else if (computerScore >= 5) {
        resultsDiv.textContent = "You lost. To a computer. Dude.";
            }

    }


