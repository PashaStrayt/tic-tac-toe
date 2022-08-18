import { observer } from "mobx-react-lite";
import { FC } from "react";
import { gameStore } from "../../store/GameStore";
import { FigureType } from "../../types";
import RemainingFigures from "../RemainingFigures";
import style from './GameInfo.module.scss';

const Info: FC = observer(() => {
  return (
    <div className={style.container}>
      <p className={style['text-active-player']}>
        Сейчас ходит:
        <span className={style[gameStore.currentPlayer]}>
          {
            gameStore.currentPlayer === 'orange' ?
              ' оранжевый' :
              ' голубой'
          }
        </span>
      </p>
      <p className={style['text-info']}>
        Запас <span className={style.orange}>крестиков</span>
      </p>
      <RemainingFigures type={FigureType.mark} figures={gameStore.remainingFigures.orange} />
      <p className={style['text-info']}>
        Запас <span className={style.blue}>ноликов</span>
      </p>
      <RemainingFigures type={FigureType.zero} figures={gameStore.remainingFigures.blue} />
    </div>
  );
});

export default Info;