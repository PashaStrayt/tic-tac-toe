import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react";
import { isTimeForStep } from "../API";
import { gameStore } from "../store/GameStore";
import { FigureSize, FigureType } from "../types";
import Button from "./Button/Button";
import Figure from "./Figure/Figure";

interface ButtonFigureProps {
  type: FigureType;
  size: FigureSize
}

const ButtonFigure: FC<ButtonFigureProps> = observer(({ type, size }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (type === gameStore.activeFigure.type && size === gameStore.activeFigure.size) {
      setStyle({ background: ' #d8d8d8' });
    } else {
      setStyle({});
    }
  }, [gameStore.activeFigure])


  const clickHandler = () => {
    if (!isTimeForStep(type)) return;

    gameStore.activeFigure = { type, size };
  };

  return (
    <div>
      <Button clickHandler={clickHandler} className='figure' additionalStyle={style}>
        <Figure type={type} size={size} />
      </Button>
    </div>
  );
});

export default ButtonFigure;