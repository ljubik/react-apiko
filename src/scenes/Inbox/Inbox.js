import React from "react";
import T from "prop-types";
import s from "./Inbox.module.scss";
import { Header } from "../../components";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../Router";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Api from "../../api/Index";
// import Api from "../../api/Index";

function Inbox() {
  if (Api.Auth.isLoggetIn) {
    return <Redirect to={routes.login} />;
  }
  return <div className={s.container}>inbox component</div>;
}

Inbox.propType = [];

export default Inbox;
