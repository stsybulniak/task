import { FC } from 'react';
import { Sections } from '../../../pages/SlidePage';
import cn from 'classnames';
import './SlidesNav.scss';

interface ISlidesNavProps {
  activeSection: Sections;
  setActiveSection: (section: Sections) => void;
}

const SlidesNav: FC<ISlidesNavProps> = ({ activeSection, setActiveSection }) => {
  return (
    <div className='SlidesNav'>
      <nav className='SlidesNav__wrapper'>
        {Object.entries(Sections).map(([key, value]) => (
          <div
            onClick={() => setActiveSection(value)}
            className={cn('SlidesNav__item', { 'SlidesNav__item--active': activeSection === value })}
            key={key}
          >
            {value}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SlidesNav;
