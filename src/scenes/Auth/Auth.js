import React from "react";
import T from "prop-types";
import s from "./Auth.module.scss";
import { Header } from "../../components";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../Router";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Api from "../../api/Index";

function Auth() {
  return (
    <div className={s.container}>
      <Header />
      Auth from component
      <Switch>
        {Api.Auth.isLoggetIn && <Redirect to={routes.home} />}
        <Route path={routes.login} component={Login} />
        <Route path={routes.register} component={Register} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

Auth.propType = [];

export default Auth;
