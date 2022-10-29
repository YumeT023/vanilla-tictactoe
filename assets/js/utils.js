/**
 * build a tile with the given content
 * @param {string|null}content
 * @param {number} index
 * @param {string[]} board
 * @return {HTMLDivElement}
 */
function buildTile(content = "", index, board) {
  const tileContainer = document.createElement("div");

  tileContainer.className = `tile tile-${index}`;
  tileContainer.textContent = content;
  tileContainer.onclick = () => putMark(tileValue, index);
  toggleState();

  const tileValue = document.createElement("div");
  tileValue.className = "tile__value";
  tileValue.textContent = content;

  tileContainer.appendChild(tileValue);

  return tileContainer;
}

/**
 * build a 9 * 9 board under the given container and return an array of its value
 * @param {HTMLElement} container
 * @param {string[]} board
 * @return {string[]}
 */
function computeBoard(container, board = Array(9).fill(null)) {
  const containerBoard = document.createElement("div");
  containerBoard.className = "container__board";

  board.forEach((content, index) => {
    const tile = buildTile(content, index, board);
    containerBoard.appendChild(tile);
  });

  container.appendChild(containerBoard);

  return board;
}

/**
 * fire on specified index
 * @param {HTMLDivElement} tile
 * @param {number} index
 */
function putMark(tile, index) {
  let hasWinner = boardHasWinner();

  if (hasWinner || board[index]) {
    hasWinner ? alert("there is already a winner") : alert("already filled");
    return;
  }

  if (!board[index]) {
    board[index] = markState;
    tile.textContent = markState;

    let winner = boardHasWinner();
    if (winner) {
      declareWinner(winner);
      return;
    }

    toggleState();
  }
}
