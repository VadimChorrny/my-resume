import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <Link to=''>Vadym Chornyi</Link>
      </div>
      <div className='header__menu'>
        <div className='header__menu_item'>
          <Link to='/skills'>Skills</Link>
        </div>
        <div className='header__menu_item'>EN</div>
        <div className='header__menu_item'>
          <Link to='/works'>Works</Link>
        </div>
      </div>
    </div>
  );
};
