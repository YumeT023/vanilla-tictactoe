// element
const CONTAINER = document.querySelector(".container");

// GLOBAL STATE
let markState = "X";
let board = computeBoard(CONTAINER);

// CONSTANT
const WINNER_LAWS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/**
 * toggle the global markState
 *
 */
function toggleState() {
  markState = markState === "X" ? "O" : "X";
}

/**
 * check if there's a winner on the global board state
 */
function boardHasWinner() {
  for (let line of WINNER_LAWS) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return line;
  }
  return null;
}

/**
 * declare winner by coloring the winnerLine
 * @param {number[]} winnerLine
 */
function declareWinner(winnerLine) {
  winnerLine.forEach((index) => {
    const square = document.querySelector(`.tile-${index}`);
    square && square.classList.add("winner-color");
  });
}
