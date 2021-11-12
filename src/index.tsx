import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase/index";
import "@firebase/firestore";
import { initializeApp } from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyDUcRzJlYK9rQ9vXL_WwnmSLGeQ0McyERw",
  authDomain: "react-ts-chat-70780.firebaseapp.com",
  projectId: "react-ts-chat-70780",
  storageBucket: "react-ts-chat-70780.appspot.com",
  messagingSenderId: "133802905391",
  appId: "1:133802905391:web:f3e4380a4ea7b5b9995bda",
  measurementId: "G-PMG18YWFNM",
});
export const Context = createContext({} as AppContextInterface);
console.log("Context: ", Context);

const auth = firebase.app().auth();
const firestore = firebase.firestore();

interface AppContextInterface {
  firebase: any;
  auth: any;
  firestore: any;
}

ReactDOM.render(
  <Context.Provider value={{ firebase, auth, firestore }}>
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
