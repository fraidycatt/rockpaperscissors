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
    
    function getHumanChoice() {
        let humanChoice = prompt("Let's play Rock, Paper, Scissors. Choose wisely... or else.").toLowerCase();
        if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
            return humanChoice;
        }
        else {
            getHumanChoice()
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    function playRound(hChoice, cChoice) {
        if (hChoice === 'rock' && cChoice === 'rock') {
            alert(`They said 'let those without sin cast the first stone,' and both you and the computer said, 'ok.' Rocks everywhere. Try again.\nYou: ${humanScore}\nComputer: ${computerScore}`);
        }
        else if (hChoice === 'rock' && cChoice === 'paper') {
            computerScore += 1;
            alert(`The devious computer covered your rock with its paper, which somehow means it won this round.\nYou: ${humanScore}\nComputer: ${computerScore}`);
        }
        else if (hChoice === 'rock' && cChoice === 'scissors') {
            humanScore += 1;
            alert(`You absolutely destroyed the computer's scissors with your rock, caveman style. Brutal.\nYou: ${humanScore}\nComputer: ${computerScore}`);
        }
        else if (hChoice === 'paper' && cChoice === 'paper') {
            alert (`Two pieces of paper make... a draw, or some other witty pun.\nYou: ${humanScore}\nComputer: ${computerScore}`);
        }
        else if (hChoice === 'paper' && cChoice === 'scissors') {
            computerScore += 1;
            alert (`The computer slashed your paper in two with its scissors, samurai style.\nYou: ${humanScore}\nComputer: ${computerScore}`);
        }
        else if (hChoice === 'paper' && cChoice === 'rock') {
            humanScore += 1;
            alert (`The computer's rock is eclipsed by your paper. No one knows it exists any longer, which perhaps is the same as nonexistence.\nYou: ${humanScore}\nComputer: ${computerScore}`);
        }
        else if (hChoice === 'scissors' && cChoice === 'scissors') {
            alert (`You each drew scissors and thought... actually, this is a lot of scary knives. It's a draw this time.\nYou: ${humanScore}\nComputer: ${computerScore}`);
        }
        else if (hChoice === 'scissors' && cChoice === 'rock') {
            computerScore += 1;
            alert (`Your scissors have been dented to mere scraps of metal by the computer's rock. Jeeeeez.\nYou: ${humanScore}\nComputer: ${computerScore}`);
        }
        else if (hChoice === 'scissors' && cChoice === 'paper') {
            humanScore += 1;
            alert (`Dramatically you draw your scissors across the computer's paper, which stays intact for a single moment-- then falls to the ground in two pieces. Like Darth Maul.\nYou: ${humanScore}\nComputer: ${computerScore}`);
        }
    }

    while (humanScore < 5 && computerScore < 5) {
    playRound(getHumanChoice(), getComputerChoice());
}

if (humanScore >= 5) {
    alert("You have managed to win against a computer, for all its programming and code. Might you challenge a human being next?");
}
else if (computerScore >= 5) {
    alert("You lost. To a computer. Dude.");
}