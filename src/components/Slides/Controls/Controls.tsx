import { FC } from 'react';
import { Position } from '../Slides';
import Triangle from '../Triangle/Triangle';
import './Controls.scss';

interface IControlsProps {
  position: Position;
  handleLeftControl: () => void;
  handleRightControl: () => void;
}

const Controls: FC<IControlsProps> = ({ position, handleLeftControl, handleRightControl }) => {
  return (
    <div className='Controls'>
      {position !== Position.leftCollapse && (
        <Triangle className='Controls-triangle Controls-triangle--left' left onClickHandler={handleLeftControl} />
      )}
      {position !== Position.rightCollapse && (
        <Triangle className='Controls-triangle Controls-triangle--right' right onClickHandler={handleRightControl} />
      )}
    </div>
  );
};

export default Controls;
