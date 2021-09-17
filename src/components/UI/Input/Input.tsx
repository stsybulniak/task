import { FC } from 'react';
import './Input.scss';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';

export enum IconKeys {
  search = 'search',
}

const icons = {
  [IconKeys.search]: <SearchIcon className='Input__searchIcon' />,
};

interface IInputProps {
  placeholder?: string;
  icon?: IconKeys;
}

const Input: FC<IInputProps> = ({ icon, placeholder = '' }) => {
  return (
    <div className='Input'>
      <input className='Input__input' placeholder={placeholder} />
      {icon && icons[icon]}
    </div>
  );
};

export default Input;
