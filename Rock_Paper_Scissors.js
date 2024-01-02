const getUserChoice = (userInput) => {
 userInput = userInput.toLowerCase();
 if (userInput === 'rock' || userInput ==='paper' || userInput ==='scissors' || userInput === 'bomb'){
  return userInput;
 }else {
  console.log("error input rock, paper, or scissors");
 }
}

const getComputerChoice = () => {
  let computerChoice = (Math.floor(Math.random() * 3));
  if (computerChoice === 0){
    return 'rock';
  }
  if (computerChoice === 1){
    return 'paper';
  }
  if (computerChoice === 2){
    return 'scissors';
  }
} 

const determineWinner = (userChoice , computerChoice) => {
  if (userChoice === computerChoice){
  return 'Tie';
}
else if (userChoice === 'rock' && computerChoice === 'paper')
  return 'Computer Wins!';
else if (userChoice === 'paper' && computerChoice === 'scissors')
  return 'Computer Wins!';
else if (userChoice === 'scissors' && computerChoice === 'rock')
  return 'Computer Wins!';
else if (userChoice === 'rock' && computerChoice === 'scissors')
  return 'Player Wins!';
else if (userChoice === 'paper' && computerChoice === 'rock')
  return 'Player Wins!';
else if (userChoice === 'scissors' && computerChoice === 'paper')
  return 'Computer Wins!';
else if (userChoice === 'bomb')
return 'Player Wins!';
}

const playGame = (userInput) => {
  let userChoice = getUserChoice(userInput);
  let getcomputerChoice = getComputerChoice();
  console.log('Player Choice ' + userChoice);
  console.log('Computer Choice ' + getcomputerChoice);
  console.log(determineWinner(userChoice, getcomputerChoice));
}

playGame('bomb');