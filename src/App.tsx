import React, { useCallback, useEffect, useState } from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import { changeTheme } from "./functions/changeTheme";
import firebase from "firebase";
import { Context } from "./components/context/index";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Loader from "./components/Loader";

type ThemeState = "dark" | "light";

const App = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const [messages, setMessages] = useState<Array<{}>>([]);
  const [load, setLoading] = useState<boolean>(false);
  const [theme, setTheme] = useState<ThemeState>("dark");
  const [user, setUser] = useState<Object>();

  const config = {
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

  const fetchMessages = useCallback(async () => {
    firestore
      .collection("messages")
      .limit(100)
      .orderBy("createdAt", "desc")
      .onSnapshot((data: any) => {
        const tempDoc: Array<{}> = [];
        data.forEach((doc: any) => {
          tempDoc.push({ id: doc.id, ...doc.data() });
        });
        setMessages([...tempDoc].reverse());
        setLoading(false);
      });
  }, [firestore]);

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
    firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        setUser(user);
        setIsAuth(true);
        fetchMessages();
      } else {
        setIsAuth(false);
        setLoading(false);
      }
    });
  }, [fetchMessages]);

  if (load) {
    return (
      <>
        <Header title='Simple chat' login={isAuth} theme={theme} setTheme={setTheme} />
        <Loader />
      </>
    );
  }

  return (
    <Context.Provider value={{ firebase, auth, firestore, isAuth, setIsAuth, messages, theme, setTheme, user, load }}>
      <BrowserRouter>
        <div className='App'>
          <AppRouter />
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;
