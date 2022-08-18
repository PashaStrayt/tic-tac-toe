import { observer } from 'mobx-react-lite';
import { FC, useState } from 'react';
import Board from './components/Board/Board';
import Button from './components/Button/Button';
import GameInfo from './components/GameInfo/GameInfo';
import Tutorial from './components/Tutorial/Tutorial';
import WinningMessage from './components/WinningMessage/WinningMessage';
import { gameStore } from './store/GameStore';
import { FigureColor } from './types';

const App: FC = observer(() => {
  const [isTutorialActive, setIsTutorialActive] = useState(true);

  const resetGame = () => {
    gameStore.setDefaultRemainingFigures();
    gameStore.activeFigure = {};
    gameStore.setDefaultBoard();
    gameStore.currentPlayer = FigureColor.mark;
    gameStore.stepCounter = 0;
    gameStore.winningMessageIsActive = false;
  };

  return (
    <div className='wrapper'>
      <div className='app'>
        <Board />
        <GameInfo />
        <Button className='simple-button' clickHandler={resetGame}>
          Начать заново
        </Button>
        <Button className='simple-button' clickHandler={() => setIsTutorialActive(true)}>
          Как играть?
        </Button>
        <WinningMessage />
        <Tutorial isActive={isTutorialActive} setIsActive={setIsTutorialActive} />
      </div>
    </div>
  );
});

export default App;