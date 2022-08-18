import { FC } from 'react';
import Button from '../Button/Button';
import ModalWindow from '../ModalWindow/ModalWindow';
import gif from './gif.gif';
import style from './Tutorial.module.scss';

interface TutorialProps {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

const Tutorial: FC<TutorialProps> = ({ isActive, setIsActive }) => {

  return (
    <ModalWindow additionalStyle={isActive ? { display: 'flex' } : {}}>
      <div className={style.container} >
        <h1>Крестики нолики</h1>
        <p>Есть 2 игрока: <span className={style.orange}>оранжевый</span> (ходит крестиками) и <span className={style.blue}>голубой</span> (ходит ноликами). Игроки ходят по очереди. Первым ходит оранжевый.</p>
        <p>У каждой стороны есть 6 фигурок. Вы можете съедать фигурки соперника, если ваша фигурка больше вражеской.</p>
        <img className={style.gif} src={gif} alt="" />
        <Button className='simple-button' clickHandler={() => setIsActive(false)}>Закрыть</Button>
      </div>
    </ModalWindow>
  );
};

export default Tutorial;