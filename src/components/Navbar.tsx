import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => (
  <nav>
    <div className='nav-wrapper orange lighten-1 px1'>
      <a href='/' className='brand-logo'>
        React + TS: todo list
      </a>
      <ul className='right hide-on-med-and-down'>
        <li>
          <NavLink to='/'>Список дел</NavLink>
        </li>
        <li>
          <NavLink to='/about'>Информация</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
