//Make sure the user input is valid and set it to lowercase

function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('You did not enter a valid selection');
    }
}

//Rendomly generate a computer choice

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
    
}

//Compare the user choice and computer choice, then determine who won

function determineWinner(userChoice, computerChoice) {
    if(userChoice === 'bomb') {
        return 'You Win!'
    }
    if(userChoice === computerChoice) {
        return 'Its a tie!'
    } 
    if(userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'You Lose!';
        } else {
            return 'You Win!';
        }
    }
    if(userChoice === 'paper') {
        if(computerChoice === 'scissors') {
            return 'You Lose!';
        } else {
            return 'You Win!'
        }
    }
    if(userChoice === 'scissors') {
        if(computerChoice === 'rock') {
            return 'You Lose!';
        } else {
            return 'You Win!';
        }
    }
}

//line up all the steps of one game into a function and log choices and result to the console

function playGame() {
    var userChoice = getUserChoice('rock');
    console.log(`User Choice: ${userChoice}`);
    var computerChoice = getComputerChoice();
    console.log(`Computer Choice: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}

//call that function

playGame();

