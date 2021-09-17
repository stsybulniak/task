import { FC, ReactNode, useState } from 'react';
import Slide from './Slide/Slide';
import SlidesNav from './SlidesNav/SlidesNav';
import { Sections } from '../../pages/SlidePage';
import Spinner from '../UI/Spinner/Spinner';
import Controls from './Controls/Controls';
import './Slides.scss';

interface ISlidesProps {
  activeSection: Sections;
  setActiveSection: (section: Sections) => void;
  leftSlide: null | ReactNode;
  rightSlide: null | ReactNode;
  isLoading: boolean;
}

export enum Position {
  middle = 'middle',
  leftCollapse = 'leftCollapse',
  rightCollapse = 'rightCollapse',
}

const Slides: FC<ISlidesProps> = ({ activeSection, setActiveSection, leftSlide, rightSlide, isLoading }) => {
  const [position, setPosition] = useState(Position.middle);

  const handleLeftControl = () => {
    setPosition((prevPosition) => {
      if (prevPosition === Position.rightCollapse) {
        return Position.middle;
      }
      return Position.leftCollapse;
    });
  };

  const handleRightControl = () => {
    setPosition((prevPosition) => {
      if (prevPosition === Position.leftCollapse) {
        return Position.middle;
      }
      return Position.rightCollapse;
    });
  };

  return (
    <div className='Slides'>
      <SlidesNav activeSection={activeSection} setActiveSection={setActiveSection} />
      {isLoading ? (
        <Spinner center />
      ) : (
        <div className='Slides__wrapper'>
          <Slide
            isCollapsed={position === Position.leftCollapse}
            isFullWidth={position === Position.rightCollapse}
            collapsedText='collapsed view'
            isVerticalCollapseText
          >
            {leftSlide}
          </Slide>

          <Controls position={position} handleLeftControl={handleLeftControl} handleRightControl={handleRightControl} />

          <Slide
            className='Slide--right'
            isCollapsed={position === Position.rightCollapse}
            isFullWidth={position === Position.leftCollapse}
            collapsedText='full screen view'
          >
            {rightSlide}
          </Slide>
        </div>
      )}
    </div>
  );
};

export default Slides;
