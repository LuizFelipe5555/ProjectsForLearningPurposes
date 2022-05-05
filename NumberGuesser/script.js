let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (humanGuess, computerGuess, secretNumberTarget) => {
    let humanValue = (humanGuess / secretNumberTarget);
    let computerValue = (computerGuess / secretNumberTarget);
    if (humanGuess === computerGuess ) {
        return true;
    }else{
        humanValue = humanValue > 1 || (((humanValue) % 1) - 1) * -1;
        computerValue = computerValue > 1 || (((computerValue) % 1) - 1) * -1;
    } if (humanValue > computerValue) {
        return true;
    } else {
        return false;
    }
}

const updateScore = stringvalue => {
    if (stringvalue === 'human') {
        humanScore += 1;
    } else {
        computerScore +=1;
    }
}

const advanceRound = () => {
    currentRoundNumber +=1;
}