const container = document.getElementById("game-container");
const statusText = document.getElementById("status");
let nextLetter = "A";

function createGame() {
  const letters = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  letters.sort(() => Math.random() - 0.5);

  for (const letter of letters) {
    const btn = document.createElement("button");
    btn.textContent = letter;
    btn.onclick = () => handleClick(btn, letter);
    container.appendChild(btn);
  }
}

function handleClick(button, letter) {
  if (letter === nextLetter) {
    button.classList.add("correct");
    if (nextLetter === "Z") {
      statusText.textContent = "🎉 You won! All letters selected correctly!";
    } else {
      nextLetter = String.fromCharCode(nextLetter.charCodeAt(0) + 1);
      statusText.textContent = `Next: ${nextLetter}`;
    }
  } else {
    button.classList.add("wrong");
    setTimeout(() => button.classList.remove("wrong"), 500);
  }
}

createGame();
statusText.textContent = "Start with letter: A";

