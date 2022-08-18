import { FC, ReactNode } from 'react';
import style from './Button.module.scss';

interface ButtonProps {
  children?: ReactNode;
  className: string;
  additionalStyle?: {};
  clickHandler: () => void;
}

const Button: FC<ButtonProps> = ({ children, className, additionalStyle, clickHandler }) => {
  return (
    <button
      className={style[className]}
      style={additionalStyle}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;