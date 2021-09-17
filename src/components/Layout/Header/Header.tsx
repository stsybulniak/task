import { FC } from 'react';
import './Header.scss';
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import Input, { IconKeys } from '../../UI/Input/Input';

const topics = ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'];

const Header: FC = () => (
  <header className='Header'>
    <div className='Header__logo'>
      <Logo />
    </div>
    <div className='Header__nav'>
      <div className='Header__nav-topics'>
        {topics.map((topic) => (
          <span key={topic}>{topic}</span>
        ))}
      </div>
      <Input icon={IconKeys.search} placeholder='Search' />
    </div>
  </header>
);

export default Header;
