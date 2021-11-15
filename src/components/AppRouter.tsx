import firebase from "firebase";
import { disconnect } from "process";
import React, { FC, useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect, Route, Switch } from "react-router";
import { changeTheme } from "../functions/changeTheme";
import Chat from "./Chat";
import { Context } from "./context";
import Header from "./Header";
import Loader from "./Loader";
import Login from "./Login";

const AppRouter: FC = () => {
  const [textMessage, setTextMessage] = useState("");

  const { theme, setTheme, user, firebase, firestore, auth, isAuth, setIsAuth } = useContext(Context);

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
