import { gameStore } from "./store/GameStore";
import { FigureColor, FigureType } from "./types";


export const isWinner = (player: string) => {
  const type = player === FigureColor.mark ?
    FigureType.mark :
    FigureType.zero;

  const winningCombinations = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ];
  const board = gameStore.board;

  for (let combination of winningCombinations) {
    let count: number = 0;

    combination.forEach(cell => {
      if (board[cell[0]][cell[1]]?.type === type) {
        return count++;
      }
    });

    if (count === 3) return true;
  }
};

export const isTimeForStep = (type: FigureType) => {
  if (gameStore.currentPlayer === FigureColor.mark && type === FigureType.zero) {
    return false;
  }
  if (gameStore.currentPlayer === FigureColor.zero && type === FigureType.mark) {
    return false;
  }
  return true;
};