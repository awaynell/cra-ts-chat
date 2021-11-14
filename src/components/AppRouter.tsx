import firebase from "firebase";
import React, { FC, useContext, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import { changeTheme } from "../functions/changeTheme";
import Chat from "./Chat";
import { Context } from "./context";
import Header from "./Header";
import Loader from "./Loader";
import Login from "./Login";

const AppRouter: FC = () => {
  const [textMessage, setTextMessage] = useState("");
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(false);
  const { user, auth, isAuth, setIsAuth } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      changeTheme("dark", setTheme);
    }
    if (localStorage.getItem("theme") === "dark") {
      changeTheme("dark", setTheme);
    } else if (localStorage.getItem("theme") === "light") {
      changeTheme("light", setTheme);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(true);
        console.log(user);
        setLoading(false);
        console.log(loading);
      } else {
        setLoading(false);
        setIsAuth(false);
      }
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

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