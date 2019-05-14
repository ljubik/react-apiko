import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
// import Register from "./Register/Register";
// import Login from "./Login/Login";
import NotFound from "./NotFound/NotFound";
import Auth from "./Auth/Auth";
import Inbox from "./Inbox/Inbox";

export const routes = {
  home: `/`,
  login: `/auth/login`,
  register: `/auth/register`,
  auth: `/auth`,
  inbox: `/inbox`
};

// function Home() {
//   return <div className="Home">Home</div>;
// }
// function NotFound() {
//   return <div className="NotFound">404 Not Found</div>;
// }

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        {/* exect для тогого щоб  спрацьовував тільки сiлеш а не /1 */}
        <Route exact path={routes.inbox} component={Inbox} />
        <Auth />
        <Route component={NotFound} />
        {/* буде спрацьовувати завжди */}
      </Switch>
    </BrowserRouter>
  );
}
