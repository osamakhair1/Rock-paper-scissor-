const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;
        playRound(playerChoice);
    });
});

function playRound(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const resultText = getResultText(playerChoice, computerChoice);
    updateScore(resultText);
    document.getElementById('result').textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${resultText}`;
    document.getElementById('score').textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function getResultText(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function updateScore(resultText) {
    if (resultText === "You win!") {
        playerScore++;
    } else if (resultText === "You lose!") {
        computerScore++;
    }
}
