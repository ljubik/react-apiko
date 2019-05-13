import React from 'react';
import T from 'prop-types';
import s from './Header.module.scss';
import { routes } from '../../scenes/Router';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Header className={s.header}>
      <div className={s.left}>
        <link to={routes.home}>Marketplace</link>
      </div>
      <div className={s.right}>
        <link to={routes.login}>Login</link>
      </div>
    </Header>
  );
}

Header.propType = [];

export default Header;
