import style from './Board.module.scss';
import { FC } from "react"
import { gameStore } from '../../store/GameStore';
import Figure from '../Figure/Figure';
import { observer } from 'mobx-react-lite';
import { isWinner } from '../../API';
import { FigureColor } from '../../types';

const Board: FC = observer(() => {
  const cellClickHandler = (event: any) => {
    const row: number = event.target.getAttribute('data-row');
    const cell: number = event.target.getAttribute('data-cell');

    gameStore.makeStep(row, cell);

    if (gameStore.stepCounter >= 5) {
      if (isWinner(FigureColor.mark)) {
        gameStore.winner = FigureColor.mark;
        gameStore.winningMessageIsActive = true;
      } else if (isWinner(FigureColor.zero)) {
        gameStore.winner = FigureColor.zero;
        gameStore.winningMessageIsActive = true;
      }
    }
  };

  return (
    <div className={style.grid}>
      {
        gameStore.board.map((row, indexRow) =>
          row.map((cell, indexCell) =>
            <div
              className={style.cell}
              key={(indexRow + 1) * (indexCell + 1)}
              onClick={cellClickHandler}
              data-row={indexRow}
              data-cell={indexCell}
            >
              {
                cell?.type && cell?.size ?
                  <Figure type={cell.type} size={cell.size} /> :
                  ''
              }
            </div>
          )
        )
      }
    </div>
  );
});
export default Board;