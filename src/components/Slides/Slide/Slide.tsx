import { FC } from 'react';
import cn from 'classnames';
import './Slide.scss';

interface ISlideProps {
  isCollapsed?: boolean;
  isFullWidth?: boolean;
  className?: string;
  collapsedText?: string;
  isVerticalCollapseText?: boolean;
}

const Slide: FC<ISlideProps> = ({
  isCollapsed,
  className,
  isFullWidth,
  children,
  isVerticalCollapseText,
  collapsedText = 'Collapsed',
}) => {
  const classes = {
    'Slide--collapsed': isCollapsed,
    'Slide--fullWidth': isFullWidth,
  };

  return (
    <div className={cn('Slide', className, classes)}>
      <div className='Slide__wrapper'>
        {isCollapsed ? (
          <div
            className={cn('Slide__collapsePlaceholder', {
              'Slide__collapsePlaceholder--vertical': isVerticalCollapseText,
            })}
          >
            {isVerticalCollapseText
              ? collapsedText
                  .split('')
                  .map((letter, indx) => <span key={indx}>{letter === ' ' ? <br /> : letter}</span>)
              : collapsedText}
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default Slide;
