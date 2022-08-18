import { observer } from 'mobx-react-lite';
import { FC, useEffect, useState } from 'react';
import { gameStore } from '../../store/GameStore';
import style from './WinningMessage.module.scss';

const WinningMessage: FC = observer(() => {
  const [classes, setClasses] = useState(style.container);

  useEffect(() => {
    let classesArray: string[] = [style.container];

    if (gameStore.winningMessageIsActive) {
      classesArray.push(style['container--active']);
    }
    if (gameStore.winner === 'orange') {
      classesArray.push(style['container--orange']);
    } else if (gameStore.winner === 'blue') {
      classesArray.push(style['container--blue']);
    }

    setClasses(classesArray.join(' '));

  }, [gameStore.winningMessageIsActive])
  

  return (
    <div className={classes}>
      победитель
    </div>
  );
})
export default WinningMessage;