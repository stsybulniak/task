import React, { FC } from 'react';
import './Spinner.scss';
import cn from 'classnames';

interface ISpinner {
  center?: boolean;
}

const Spinner: FC<ISpinner> = ({ center }) => {
  const classes = {
    'Spinner--center': center,
  };

  return (
    <div className={cn('Spinner', classes)}>
      <div className='Spinner__1 Spinner--wave' />
      <div className='Spinner__2 Spinner--wave' />
      <div className='Spinner__3 Spinner--wave' />
      <div className='Spinner__4 Spinner--wave' />
      <div className='Spinner__5 Spinner--wave' />
    </div>
  );
};

export default Spinner;
