import React, { createContext, useContext, useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Chat from "./components/Chat";
import { changeTheme } from "./functions/changeTheme";
import Login from "./components/Login";
import firebase from "firebase";
import { Context } from "./components/context/index";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  let config = {
    apiKey: "AIzaSyDUcRzJlYK9rQ9vXL_WwnmSLGeQ0McyERw",
    authDomain: "react-ts-chat-70780.firebaseapp.com",
    projectId: "react-ts-chat-70780",
    storageBucket: "react-ts-chat-70780.appspot.com",
    messagingSenderId: "133802905391",
    appId: "1:133802905391:web:f3e4380a4ea7b5b9995bda",
    measurementId: "G-PMG18YWFNM",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  } else {
    firebase.app();
  }

  const auth = firebase.auth();
  const firestore = firebase.firestore();

  return (
    <Context.Provider value={{ firebase, auth, firestore, isAuth, setIsAuth }}>
      <BrowserRouter>
        <div className='App'>
          <AppRouter />
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;

// TODO
// разобраться с роутами
// настроить работу с базой данных
// добавить выход из аккаунта
