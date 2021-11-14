import React, { FC, useContext, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import { changeTheme } from "../functions/changeTheme";
import { privateRoutes, publicRoutes } from "../router";
import Chat from "./Chat";
import { Context } from "./context";
import Header from "./Header";
import Login from "./Login";

const AppRouter: FC = () => {
  const [textMessage, setTextMessage] = useState("");
  const [theme, setTheme] = useState("dark");
  const { isAuth, setIsAuth } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem === null) {
      changeTheme("dark", setTheme);
    }
    if (localStorage.getItem("theme") === "dark") {
      changeTheme("dark", setTheme);
    } else if (localStorage.getItem("theme") === "light") {
      changeTheme("light", setTheme);
    }
  }, []);

  return (
    <>
      <Header title='Simple chat' login={isAuth} theme={theme} setTheme={setTheme} />
      {isAuth ? (
        <Switch>
          <Route path='/chat'>
            <Chat textMessage={textMessage} setTextMessage={setTextMessage} />
          </Route>
          <Redirect to='/chat' />
        </Switch>
      ) : (
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Redirect to='/login' />
        </Switch>
      )}
    </>
  );
};

export default AppRouter;
