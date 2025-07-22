function updatePlayerName() {
  const input = document.getElementById("player1NameInput");
  const name = input.value.trim();
  if (name !== "") {
    document.getElementById("player1Name").textContent = name;
  }
}

const diceImages = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png"
];

function rollDice() {
  const rollButton = document.getElementById("rollButton");
  const dice1 = document.getElementById("dice1");
  const dice2 = document.getElementById("dice2");
  const result = document.getElementById("result");

  rollButton.disabled = true;
  rollButton.textContent = "Rolling... 🎲";

  let counter = 0;
  const interval = setInterval(() => {
    // Her döngüde rastgele yüzler göster
    const rand1 = Math.floor(Math.random() * 6);
    const rand2 = Math.floor(Math.random() * 6);
    dice1.src = diceImages[rand1];
    dice2.src = diceImages[rand2];
    counter++;

    if (counter >= 15) { // ~3 saniye (15 * 200ms)
      clearInterval(interval);

      // Final sonuçları
      const final1 = Math.floor(Math.random() * 6);
      const final2 = Math.floor(Math.random() * 6);
      dice1.src = diceImages[final1];
      dice2.src = diceImages[final2];

      const score1 = final1 + 1;
      const score2 = final2 + 1;

      if (score1 > score2) {
        result.textContent = `${document.getElementById("player1Name").textContent} Wins! 🎉`;
      } else if (score2 > score1) {
        result.textContent = "Player 2 Wins! 🤖";
      } else {
        result.textContent = "Draw! 🤝";
      }

      rollButton.disabled = false;
      rollButton.textContent = "Play Again 🎲";
    }
  }, 200);
}
