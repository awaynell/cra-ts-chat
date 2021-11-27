import React, { FC, useContext, useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import Chat from "./Chat";
import { Context } from "./context";
import Header from "./Header";
import Login from "./Login";

const AppRouter: FC = () => {
  const [textMessage, setTextMessage] = useState("");

  const { theme, setTheme, user, isAuth } = useContext(Context);

  return (
    <>
      <Header title='Simple chat' login={isAuth} theme={theme} setTheme={setTheme} />
      {isAuth ? (
        <Switch>
          <Route path='/chat'>
            <Chat textMessage={textMessage} setTextMessage={setTextMessage} user={user} />
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
