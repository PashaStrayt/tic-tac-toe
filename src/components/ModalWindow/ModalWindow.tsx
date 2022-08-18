import { FC, ReactNode } from 'react';
import style from './ModalWindow.module.scss';

interface ModalWindowProps {
  children: ReactNode;
  additionalStyle?: {}
}

const ModalWindow: FC<ModalWindowProps> = ({ children, additionalStyle }) => {
  return (
    <div className={style.wrapper} style={additionalStyle}>
      {children}
    </div>
  );
};

export default ModalWindow;