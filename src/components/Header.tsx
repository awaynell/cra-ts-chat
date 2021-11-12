import React, { FC } from "react";
import { changeTheme } from "../functions/changeTheme";
import { Moon, Sun } from "./svg";

interface HeaderProps {
  title?: string;
  login: boolean;
  theme: string;
  setTheme: any;
}
const Header: FC<HeaderProps> = ({ title, login, theme, setTheme }) => {
  const setThemeOnClick = (theme: string, setTheme: any) => {
    switch (theme) {
      case "light":
        changeTheme("dark", setTheme);
        break;
      case "dark":
        changeTheme("light", setTheme);
        break;
    }
  };
  return (
    <div className='header'>
      <div className='header-title'>{title}</div>
      <div className='header-controls'>
        {theme === "light" ? (
          <button onClick={() => setThemeOnClick(theme, setTheme)} className='theme'>
            <Moon />
          </button>
        ) : (
          <button onClick={() => setThemeOnClick(theme, setTheme)} className='theme'>
            <Sun />
          </button>
        )}
        {login ? <button className='header-login'>Выйти</button> : <button className='header-login'>Войти</button>}
      </div>
    </div>
  );
};

export default Header;
