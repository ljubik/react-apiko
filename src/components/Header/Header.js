import React from "react";
import T from "prop-types";
import s from "./Header.module.scss";
import { routes } from "../../scenes/Router";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={s.header}>
      <div className={s.left}>
        <Link to={routes.home}>Marketplace</Link>
      </div>
      <div className={s.right}>
        <Link to={routes.login}>Login</Link>
      </div>
    </div>
  );
}

Header.propType = [];

export default Header;
