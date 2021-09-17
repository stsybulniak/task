import { FC } from 'react';
import './Triangle.scss';
import cn from 'classnames';

interface ITriangleProps {
  left?: boolean;
  right?: boolean;
  className?: string;
  onClickHandler?: () => void;
}

const Triangle: FC<ITriangleProps> = ({ left, right, className, onClickHandler }) => {
  const classes = {
    'Triangle--left': left,
    'Triangle--right': right,
  };
  return <div onClick={onClickHandler} className={cn('Triangle', className, classes)} />;
};

export default Triangle;
