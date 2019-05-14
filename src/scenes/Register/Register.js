import React from "react";
// import T from 'prop-types';
import s from "./Register.module.scss";
import { routes } from "../Router";
import { Link } from "react-router-dom";
// import { Header } from '../../components/';

function Register() {
  return (
    <div className={s.container}>
      {/* <Header /> */}
      Register from component
      <Link to={routes.login}>Login</Link>
    </div>
  );
}

// Home.propType = [];

export default Register;
