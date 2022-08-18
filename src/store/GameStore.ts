import { makeAutoObservable } from "mobx";
import { isTimeForStep } from "../API";
import { FigureColor, FigureSize, FigureType } from "../types";

interface RemainingFigures {
  orange: number[];
  blue: number[]
}
export interface ActiveFigure {
  type?: FigureType;
  size?: FigureSize
}

const { senary, quinary, quaternary, tertiary, secondary, primary } = FigureSize;

class GameStore {
  currentPlayer: FigureColor = FigureColor.mark;
  board: { type?: FigureType, size?: FigureSize }[][];
  activeFigure: ActiveFigure = {};
  remainingFigures: RemainingFigures;
  stepCounter: number = 0;
  winningMessageIsActive: boolean = false;
  winner: string = '';

  constructor() {
    this.board = [];
    this.remainingFigures = { orange: [], blue: [] };
    this.setDefaultBoard();
    this.setDefaultRemainingFigures();
    makeAutoObservable(this);
  }

  changeCurrentPlayer() {
    this.currentPlayer = this.currentPlayer === FigureColor.mark ?
      FigureColor.zero :
      FigureColor.mark
  }

  makeStep(row: number, cell: number) {
    const player: string = this.currentPlayer;
    const { type, size } = this.activeFigure;
    if (type && size) {
      if (!isTimeForStep(type)) return;
      const { type: typeOld, size: sizeOld } = this.board[row][cell];
      if (typeOld && sizeOld) {
        if (typeOld === type || sizeOld >= size) return;
      }
      this.board[row][cell] = { type, size };
    } else return;

    if (player === 'orange') {
      const figures: number[] = this.remainingFigures.orange;
      this.remainingFigures.orange = figures.filter(figure => {
        return !(figure === this.activeFigure.size);
      })
    } else if (player === 'blue') {
      const figures: number[] = this.remainingFigures.blue;
      this.remainingFigures.blue = figures.filter(figure => {
        return !(figure === this.activeFigure.size);
      })
    }

    this.stepCounter++;
    this.changeCurrentPlayer();
  }

  setDefaultRemainingFigures() {
    this.remainingFigures = {
      orange: [
        senary, quinary, quaternary, tertiary, secondary, primary
      ],
      blue: [
        senary, quinary, quaternary, tertiary, secondary, primary
      ]
    }
  }

  setDefaultBoard() {
    this.board = [[{}, {}, {}], [{}, {}, {}], [{}, {}, {}]];
  }
};

export const gameStore = new GameStore();