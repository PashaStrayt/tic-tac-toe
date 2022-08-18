import { FC, ReactNode } from 'react';
import style from './List.module.scss';

interface ListProps {
  children?: ReactNode;
  additionalStyle?: {}
}

const List: FC<ListProps> = ({ children, additionalStyle }) => {

  return (
    <div className={style.container} style={additionalStyle}>
      {children}
    </div>
  );
};
export default List;