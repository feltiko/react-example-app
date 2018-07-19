import React from 'react';
import Menu from '../Menu';
import Routes from '../../routes';
import './styles.css';

function Header() {
  return (
    <header>
      <Menu routes={Routes} />
    </header>
  );
}

export default Header;
