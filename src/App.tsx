import React, { useContext, useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Chat from "./components/Chat";
import { changeTheme } from "./functions/changeTheme";
import Login from "./components/Login";
import firebase from "firebase";
import { Context } from ".";

const App = () => {
  const [textMessage, setTextMessage] = useState("");
  const [theme, setTheme] = useState("dark");
  // const [login, setLogin] = useState(false);

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
    <div className='App'>
      <Header title={"Simple chat"} login={true} theme={theme} setTheme={setTheme} />
      {/* <Login /> */}
      <Chat textMessage={textMessage} setTextMessage={setTextMessage} />
    </div>
  );
};

export default App;

// TODO
// разобраться с роутами
// настроить работу с базой данных
// добавить выход из аккаунта
