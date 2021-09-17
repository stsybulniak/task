import { FC } from 'react';
import Header from './Header/Header';
import './Layout.scss';

const Layout: FC = ({ children }) => (
  <div className='Layout'>
    <Header />
    <main className='Layout__main'>{children}</main>
  </div>
);

export default Layout;
