let color = "black";
let clicked = false;

function populateBoard(size) {
  // Select the board
  let board = document.querySelector(".board");

  // Clear the previously colored squares
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());

  // Create grid
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0, area = size * size; i < area; i++) {
    //Create the squares inside the board
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}
populateBoard(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    document.querySelector(".error").style.display = "none";
    populateBoard(input);
  } else {
    document.querySelector(".error").style.display = "flex";
  }
}

function colorSquare() {
  if (clicked) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
  // Select the board
  let board = document.querySelector(".board");

  // Clear the previously colored squares
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

document.querySelector(".board").addEventListener("click", () => {
  clicked = !clicked;
});
