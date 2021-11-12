import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Chat from "./components/Chat";
import { changeTheme } from "./functions/changeTheme";

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      changeTheme("dark", setTheme);
    } else if (localStorage.getItem("theme") === "light") {
      changeTheme("light", setTheme);
    }
  }, []);

  return (
    <div className='App'>
      <Header title={"Simple chat"} login={false} theme={theme} setTheme={setTheme} />
      <Chat />
    </div>
  );
};

export default App;
