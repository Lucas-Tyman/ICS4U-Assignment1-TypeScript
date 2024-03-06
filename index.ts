/**
 * This is Rock, Paper, Scissors game
 *
 * By: Lucas Tyman
 * Version: 1.0
 * Since: 2024-03-05
 */

function getUserChoice() {
  const validChoices = ['rock', 'paper', 'scissors']
  let userChoice = prompt("Enter your choice (rock, paper, or scissors): ")?.toLowerCase() || ''// Sourced from chatpt
  while (!validChoices.includes(userChoice)) {
    userChoice = prompt("Invalid choice.\nPlease enter rock, paper, or scissors: ")?.toLowerCase() || ''
  }
  return userChoice
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!"
  } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
    return "You win!"
  } else {
    return "Computer wins!"
  }
}

function main() {
  console.log("Let's play Rock, Paper, Scissors!")
  const userChoice = getUserChoice()
  const computerChoice = getComputerChoice()
  console.log(`You chose: ${userChoice}`)
  console.log(`Computer chose: ${computerChoice}`)
  console.log(determineWinner(userChoice, computerChoice))
}

main()

