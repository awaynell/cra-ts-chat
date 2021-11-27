import React, { FC, useContext } from "react";
import { changeTheme } from "../functions/changeTheme";
import { signOut } from "../functions/login";
import { Context } from "./context";
import { Moon, Sun } from "./svg";

interface HeaderProps {
  title?: string;
  login: boolean;
  theme: string;
  setTheme: any;
}
const Header: FC<HeaderProps> = ({ title, login, theme, setTheme }) => {
  const { setIsAuth } = useContext(Context);

  const setThemeOnClick = (theme: string, setTheme: any) => {
    document.body.classList.remove("preload");
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
        {login ? (
          <button className='header-login' onClick={() => signOut(setIsAuth)}>
            Выйти
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
