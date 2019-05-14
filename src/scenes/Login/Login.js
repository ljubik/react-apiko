import React from "react";
// import T from 'prop-types';
import s from "./Login.module.scss";
import { routes } from "../Router";
import { Link } from "react-router-dom";
// import { Header } from '../../components/';

function Login() {
  return (
    <div className={s.container}>
      {/* <Header /> */}
      Login from component
      <Link to={routes.register}>register</Link>
    </div>
  );
}

// Login.propType = [];

export default Login;
