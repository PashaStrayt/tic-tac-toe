import { FC, useEffect, useState } from 'react';
import { FigureSize, FigureText, FigureType } from '../../types';
import style from './Figure.module.scss';

interface FigureProps {
  type: FigureType;
  size: FigureSize
}

const Figure: FC<FigureProps> = ({ type, size }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (type === FigureType.mark) {
      setText(FigureText.mark)
    } else if (type === FigureType.zero) {
      setText(FigureText.zero)
    }
  }, []);
  

  return (
    <p className={style[type]} style={{ fontSize: size + 'px' }}>
      {text}
    </p>
  );
};
export default Figure;